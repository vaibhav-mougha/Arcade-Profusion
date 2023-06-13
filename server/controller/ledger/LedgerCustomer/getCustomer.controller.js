require("dotenv").config();
const asyncHandler = require("express-async-handler");
const { ledgerModel } = require("../../../models/ledger/ledgerCustName.model");

const getCustomerController = asyncHandler(async (req, res) => {
  let userId = req._id;

  try {
    let customers = await ledgerModel.find({ userId }).populate("userId");

    return res.status(200).json({ msg: "List of Customers !", customers });
  } catch (error) {
    return res.status(500).json({ error: "Somthing Went Wrong!" });
  }
});

module.exports = {
  getCustomerController,
};
