const {
  getCategories,
  createCategory,
  updateCategory,
  getCategory,
  deleteCategory,
  saveAttr,
} = require("../controllers/category.controller");
const { isAuthorized, isAdmin } = require("../middlewares/auth");
const {
  categoryCreateValidator,
  categoryUpdateValidator,
  categorySaveAttrValidator,
} = require("../validations/category.validations");

const router = require("express").Router();

router
  .route("/")
  .get(getCategories)
  .post(isAuthorized, isAdmin, categoryCreateValidator, createCategory);

router
  .route("/:id")
  .get(getCategory)
  .put(isAuthorized, isAdmin, categoryUpdateValidator, updateCategory)
  .delete(isAuthorized, isAdmin, deleteCategory);

router
  .route("/:id/attrs")
  .put(isAuthorized, isAdmin, categorySaveAttrValidator, saveAttr);

module.exports = router;
