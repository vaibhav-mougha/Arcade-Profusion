require("dotenv").config();
const asyncHandler = require("express-async-handler");
const { validationResult } = require("express-validator");
const { authModel } = require("../../models/auth/auth.model");
const bcrypt = require("bcrypt");
const saltRounds = 6;

const registerController = asyncHandler(async (req, res) => {
  let { username, email, password, gender, dob } = req.body;

  const dateOfBirth = new Date(dob); //YYYY-MM-DD
  const currentDate = new Date();

  let age = currentDate.getFullYear() - dateOfBirth.getFullYear();
  const monthDiff = currentDate.getMonth() - dateOfBirth.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && currentDate.getDate() < dateOfBirth.getDate())
  ) {
    age--;
  }

  try {
    // If any error exists then throw Error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array()[0].msg });
    }

    // check if username exists
    const isUsername = await authModel.findOne({ username });
    if (isUsername) {
      return res.status(400).json({ error: "This username already Exists!" });
    }

    // Check if email exists
    const isEmail = await authModel.findOne({ email });
    if (isEmail) {
      return res.status(400).json({ error: "This email already Exists!" });
    }

    // if username and email are not exists then create user

    // convert password to hash password
    let hashPassword = await bcrypt.hash(password, saltRounds);

    // Create user

    let createUser = await authModel.create({
      username,
      email,
      password: hashPassword,
      gender,
      dob,
      age,
    });

    return res.status(201).json({ msg: "Successfully Register!", createUser });
  } catch (error) {
    return res.status(500).json({ error: "Something Went Wrong!" });
  }
});

module.exports = {
  registerController,
};
