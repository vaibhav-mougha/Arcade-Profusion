const mongoose = require("mongoose");

const authSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    profile_pic: {
      type: String,
      default: "https://bit.ly/broken-link",
    },
    password: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    dob: {
      //YYYY-MM-DD
      type: String,
      required: true,
    },
    age: {
      type: String,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const authModel = mongoose.model("auth", authSchema);

module.exports = {
  authModel,
};
