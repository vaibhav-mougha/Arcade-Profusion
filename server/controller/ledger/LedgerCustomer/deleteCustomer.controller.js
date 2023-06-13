require("dotenv").config();
const asyncHandler = require("express-async-handler");
const { ledgerModel } = require("../../../models/ledger/ledgerCustName.model");

const deleteCustomerController = asyncHandler(async (req, res) => {
  let customerId = req.params.customerId;

  try {
    await ledgerModel.findByIdAndDelete({ _id: customerId });
    return res
      .status(200)
      .json({ msg: "Successfully Deleted the Customer !", customerId });
  } catch (error) {
    return res.status(500).json({ error: "Somthing Went Wrong!" });
  }
});

module.exports = {
  deleteCustomerController,
};
