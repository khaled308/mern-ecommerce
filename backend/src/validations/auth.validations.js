const { check } = require("express-validator");
const User = require("../models/User");
const validate = require("../middlewares/validate");

exports.registerValidate = [
  check("name")
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ min: 3 })
    .withMessage("Name must be at least 3 characters long"),
  check("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Email must be valid")
    .custom(async (email) => {
      const user = await User.findOne({ email });
      if (user) {
        throw new Error("Email already exists");
      }
      return true;
    }),
  check("password")
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),

  validate,
];
