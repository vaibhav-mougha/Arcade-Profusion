require("dotenv").config();

const mongoose = require("mongoose");
const URL = process.env.MONGO_URL;

const connection = () => {
  mongoose
    .connect(URL)
    .then(() => {
      console.log({ msg: "Connected to the DB !" });
    })
    .catch((error) => {
      console.log({ error: "Connection Failed !" });
    });
};

module.exports = {
  connection,
};
