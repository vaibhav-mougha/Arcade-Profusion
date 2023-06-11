require("dotenv").config();
const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const verifyToken = asyncHandler(async (req, res, next) => {
  try {
    let token = req.headers.token || false;
    // if token is not exists
    if (!token) {
      return res.status(400).json({ error: "You have to login first" });
    }

    // decoded token
    let { _id } = jwt.verify(token, process.env.SECRET_KEY);

    req._id = _id;
    next();
  } catch (error) {
    return res.status(500).json({ error: "Opps! Something went Wrong!" });
  }
});

module.exports = {
  verifyToken,
};
