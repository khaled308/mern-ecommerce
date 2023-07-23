const {
  getCategories,
  createCategory,
  updateCategory,
  getCategory,
  deleteCategory,
  saveAttr,
} = require("../controllers/category.controller");
const { getProductsByCategory } = require("../controllers/product.controller");
const { isAuth, isAdmin } = require("../middlewares/auth");
const {
  categoryCreateValidator,
  categoryUpdateValidator,
  categorySaveAttrValidator,
} = require("../validations/category.validations");

const router = require("express").Router();

router
  .route("/")
  .get(getCategories)
  .post(isAuth, isAdmin, categoryCreateValidator, createCategory);

router
  .route("/:id")
  .get(getCategory)
  .put(isAuth, isAdmin, categoryUpdateValidator, updateCategory)
  .delete(isAuth, isAdmin, deleteCategory);

router
  .route("/:id/attrs")
  .put(isAuth, isAdmin, categorySaveAttrValidator, saveAttr);

router.get("/:category/products", getProductsByCategory);
module.exports = router;
