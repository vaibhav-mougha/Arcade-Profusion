require("dotenv").config();
const asyncHandler = require("express-async-handler");
const {
  ledgerTransModel,
} = require("../../../models/ledger/ledgerCustTrans.model");

const getTransactionController = asyncHandler(async (req, res) => {
  let customerId = req.params.id;

  try {
    const result = await ledgerTransModel.aggregate([
      {
        $group: {
          _id: null,
          balanceAdvance: {
            $sum: {
              $cond: [
                { $eq: ["$transType", "given"] },
                "$amount",
                { $multiply: ["$amount", -1] },
              ],
            },
          },
        },
      },
    ]);

    const balanceAdvance = result.length > 0 ? result[0].balanceAdvance : 0;

    let customersTransactions = await ledgerTransModel
      .find({ customerId })
      .populate("customerId");

    return res
      .status(200)
      .json({
        msg: "List of transactions !",
        balanceAdvance,
        customersTransactions,
      });
  } catch (error) {
    return res.status(500).json({ error: "Somthing Went Wrong!" });
  }
});

module.exports = {
  getTransactionController,
};
