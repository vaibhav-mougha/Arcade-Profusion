const mongoose = require("mongoose");

const CustomerSchema = mongoose.Schema(
  {
    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ledgerCustName",
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    date: {
      //YYYY-MM-DD
      type: String,
      required: true,
    },
    transType: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const ledgerTransModel = mongoose.model("ledgerCustTrans", CustomerSchema);

module.exports = {
  ledgerTransModel,
};
