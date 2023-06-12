const mongoose = require("mongoose");

const ledgerSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "auth",
    },
    customerName: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const ledgerModel = mongoose.model("ledgerCustName", ledgerSchema);

module.exports = {
  ledgerModel,
};
