require("dotenv").config();
const asyncHandler = require("express-async-handler");
const { validationResult } = require("express-validator");
const { ledgerModel } = require("../../../models/ledger/ledgerCustName.model");

const addCustomerController = asyncHandler(async (req, res) => {
  let { customerName } = req.body;

  let userId = req._id;
  
  try {
    // If any error exists then throw Error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array()[0].msg });
    }

    // Create Customer
    let createCustomer = await ledgerModel.create({
      customerName,
      userId,
    });

    return res
      .status(201)
      .json({ msg: "Customer Added Successfully !", createCustomer });
  } catch (error) {
    return res.status(500).json({ error: "Something Went Wrong!" });
  }
});

module.exports = {
  addCustomerController,
};
