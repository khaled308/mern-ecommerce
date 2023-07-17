const { check } = require("express-validator");
const validate = require("../middlewares/validate");

exports.createProductValidator = [
  check("name")
    .trim()
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ max: 32 })
    .withMessage("Name must be less than 32 characters long"),
  check("description")
    .trim()
    .notEmpty()
    .withMessage("Description is required")
    .isLength({ max: 2000 })
    .withMessage("Description must be less than 2000 characters long"),
  check("price")
    .notEmpty()
    .withMessage("Price is required")
    .isNumeric()
    .withMessage("Price must be a number"),
  check("category")
    .notEmpty()
    .withMessage("Category is required")
    .isMongoId()
    .withMessage("Category must be a valid MongoDB ID"),
  check("stock")
    .notEmpty()
    .withMessage("Quantity is required")
    .isNumeric()
    .withMessage("Quantity must be a number"),
  check("cover_image").custom((value, { req }) => {
    if (req.files && !req.files.cover_image) {
      throw new Error("Cover image is required");
    }
    return true;
  }),
  validate,
];
