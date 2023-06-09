const authRouter = require("express").Router();
const {
  registerController,
} = require("../../controller/auth/Register.controller");
const { body } = require("express-validator");
const { loginController } = require("../../controller/auth/Login.controller");
const {
  getUserController,
} = require("../../controller/auth/GetUsersController");

authRouter.route("/register").post(
  [
    body("username", "Enter your Username").not().isEmpty(),
    body("email", "Enter a vaild Email").isEmail(),
    body("password", "Password Length must be atleast 3").isLength({
      min: 3,
    }),
    body("gender", "Select your Gender").not().isEmpty(),
    body("dob", "Select your Date of Birth").not().isEmpty(),
    body(
      "mobile",
      "Please enter your valid Mobile Number(+91 xxxx-xxx-xxx)"
    ).isLength({ min: 10 }),
  ],
  registerController
);

authRouter.route("/login").post(
  [
    body("email", "Enter a vaild email").isEmail(),
    body("password", "Password length must be atleast 3").isLength({
      min: 3,
    }),
  ],
  loginController
);

authRouter.route("/get/users").get(getUserController);

module.exports = {
  authRouter,
};
