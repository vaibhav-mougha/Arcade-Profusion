require("dotenv").config();
const asyncHandler = require("express-async-handler");
const { ledgerTransModel } = require("../../../models/ledger/ledgerCustTrans.model");

const deleteTransactionController = asyncHandler(async (req, res) => {
  let transactionId = req.params.transactionId;

  try {
    await ledgerTransModel.findByIdAndDelete({ _id: transactionId });
    return res.status(200).json({
      msg: "Successfully Deleted the Transaction Details !",
      transactionId,
    });
  } catch (error) {
    return res.status(500).json({ error: "Somthing Went Wrong!" });
  }
});

module.exports = {
  deleteTransactionController,
};
