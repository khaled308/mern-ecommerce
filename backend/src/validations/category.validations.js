const { check } = require("express-validator");
const Category = require("../models/Category");
const validate = require("../middlewares/validate");

exports.categoryCreateValidator = [
  check("name")
    .not()
    .isEmpty()
    .withMessage("Name is required")
    .custom((value) => {
      return Category.findOne({ name: value }).then((category) => {
        if (category) {
          return Promise.reject("Category already exists");
        }
      });
    }),
  validate,
];

exports.categoryUpdateValidator = [
  check("name")
    .not()
    .isEmpty()
    .withMessage("Name is required")
    .custom((value, { req }) => {
      return Category.findOne({ name: value }).then((category) => {
        if (category && category._id.toString() !== req.params.id) {
          return Promise.reject("Category already exists");
        }
      });
    }),
  validate,
];

exports.categorySaveAttrValidator = [
  check("attrs")
    .isArray({ min: 1 })
    .withMessage(
      "Attribute list must be an array and contain at least one element"
    ),
  check("attrs.*.name").not().isEmpty().withMessage("Name is required"),
  check("attrs.*.values").not().isEmpty().withMessage("Values are required"),
  validate,
];
