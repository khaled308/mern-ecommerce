const {
  getCategories,
  createCategory,
  updateCategory,
  getCategory,
  deleteCategory,
  saveAttr,
} = require("../controllers/category.controller");
const {
  categoryCreateValidator,
  categoryUpdateValidator,
  categorySaveAttrValidator,
} = require("../validations/category.validations");

const router = require("express").Router();

router
  .route("/")
  .get(getCategories)
  .post(categoryCreateValidator, createCategory);

router
  .route("/:id")
  .get(getCategory)
  .put(categoryUpdateValidator, updateCategory)
  .delete(deleteCategory);

router.route("/:id/attrs").put(categorySaveAttrValidator, saveAttr);

module.exports = router;
