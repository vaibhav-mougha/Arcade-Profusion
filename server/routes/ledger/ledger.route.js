const ledgerRouter = require("express").Router();
const { body } = require("express-validator");
const {
  addCustomerController,
} = require("../../controller/ledger/LedgerCustomer/addCustomer.controller");
const {
  deleteCustomerController,
} = require("../../controller/ledger/LedgerCustomer/deleteCustomer.controller");
const {
  getCustomerController,
} = require("../../controller/ledger/LedgerCustomer/getCustomer.controller");
const {
  updateCustomerController,
} = require("../../controller/ledger/LedgerCustomer/updateCustomer.controller");

const { verifyToken } = require("../../middleware/verifyToken");

const {
  addTransactionController,
} = require("../../controller/ledger/TransactionDetails/addTransaction.controller");
const {
  deleteTransactionController,
} = require("../../controller/ledger/TransactionDetails/deleteTransaction.controller");
const {
  getTransactionController,
} = require("../../controller/ledger/TransactionDetails/getTransaction.controller");
const {
  updateTransactionController,
} = require("../../controller/ledger/TransactionDetails/updateTransaction.controller");

// Ledger Customer Routes
ledgerRouter.route("/getcust").get(verifyToken, getCustomerController);
ledgerRouter
  .route("/addcust")
  .post(
    [body("customerName", "Please Enter the Customer Name").not().isEmpty()],
    verifyToken,
    addCustomerController
  );
ledgerRouter
  .route("/updatecust/:customerId")
  .patch(verifyToken, updateCustomerController);
ledgerRouter
  .route("/deletecust/:customerId")
  .delete(verifyToken, deleteCustomerController);

// Transaction Details Routes
ledgerRouter.route("/gettrans/:id").get(verifyToken, getTransactionController);
ledgerRouter
  .route("/addtrans/:id")
  .post(
    [
      body("title", "Please Enter the Title").not().isEmpty(),
      body("description", "Please Enter the Description").not().isEmpty(),
      body("date", "Please Enter the Date").not().isEmpty(),
      body("transType", "Please Enter the Transaction Type").not().isEmpty(),
      body("amount", "Please Enter the Amount").not().isEmpty(),
    ],
    verifyToken,
    addTransactionController
  );
ledgerRouter
  .route("/updatetrans/:transactionId")
  .patch(verifyToken, updateTransactionController);
ledgerRouter
  .route("/deletetrans/:transactionId")
  .delete(verifyToken, deleteTransactionController);

module.exports = {
  ledgerRouter,
};
