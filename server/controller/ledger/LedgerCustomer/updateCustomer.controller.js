require("dotenv").config();
const asyncHandler = require("express-async-handler");
const { ledgerModel } = require("../../../models/ledger/ledgerCustName.model");

const updateCustomerController = asyncHandler(async (req, res) => {
  let customerId = req.params.customerId;

  try {
    await ledgerModel.findByIdAndUpdate({ _id: customerId }, req.body);
    return res
      .status(200)
      .json({ msg: "Successfully Updated the Customer Name !", customerId });
  } catch (error) {
    return res.status(500).json({ error: "Somthing Went Wrong!" });
  }
});

module.exports = {
  updateCustomerController,
};
