require("dotenv").config();
const asyncHandler = require("express-async-handler");
const { ledgerTransModel } = require("../../../models/ledger/ledgerCustTrans.model");

const updateTransactionController = asyncHandler(async (req, res) => {
  let customerId = req.params.customerId;

  try {
    await ledgerTransModel.findByIdAndUpdate({ _id: customerId }, req.body);
    return res.status(200).json({
      msg: "Successfully Updated the Transaction Details !",
      customerId,
    });
  } catch (error) {
    return res.status(500).json({ error: "Somthing Went Wrong!" });
  }
});

module.exports = {
  updateTransactionController,
};
