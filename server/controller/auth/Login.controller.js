require("dotenv").config();
const asyncHandler = require("express-async-handler");
const { validationResult } = require("express-validator");
const { authModel } = require("../../models/auth/auth.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const loginController = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  try {
    // If any error exists then throw Error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array()[0].msg });
    }

    // If this email not exists throw error
    const isUser = await authModel.findOne({ email });
    if (!isUser) {
      return res.status(400).json({ error: "You have to register first!" });
    }
    // Check Password is valid
    let isPassword = await bcrypt.compare(password, isUser.password);

    if (!isPassword) {
      return res.status(400).json({ error: "Invalid credential" });
    }
    // if email and password match login

    // create jwt token
    const token = jwt.sign({ _id: isUser._id }, process.env.SECRET_KEY);

    return res.status(200).json({
      msg: "Successfully Login",
      user: {
        username: isUser.username,
        email: isUser.email,
        password: isUser.password,
        gender: isUser.gender,
        dob: isUser.dob,
        age: isUser.age,
        token,
      },
    });
  } catch (error) {
    return res.status(500).json({ error: "Something Went Wrong!" });
  }
});

module.exports = {
  loginController,
};
