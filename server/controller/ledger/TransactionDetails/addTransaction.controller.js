require("dotenv").config();
const asyncHandler = require("express-async-handler");
const { validationResult } = require("express-validator");
const {
  ledgerTransModel,
} = require("../../../models/ledger/ledgerCustTrans.model");

const addTransactionController = asyncHandler(async (req, res) => {
  let {
    title,
    description,
    date, //YYYY-MM-DD
    transType,
    amount,
  } = req.body;

  let customerId = req.params.id;
  
  try {
    // If any error exists then throw Error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array()[0].msg });
    }

    // Add Transaction
    let addTransaction = await ledgerTransModel.create({
      title,
      description,
      date, //YYYY-MM-DD
      transType,
      amount,
      customerId,
    });

    return res.status(201).json({
      msg: "Customer Transaction Details Added Successfully !",
      addTransaction,
    });
  } catch (error) {
    return res.status(500).json({ error: "Something Went Wrong!" });
  }
});

module.exports = {
  addTransactionController,
};
