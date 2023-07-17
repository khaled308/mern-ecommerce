const {
  getProducts,
  getBestSellingProducts,
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller");
const { upload } = require("../middlewares/multer");
const {
  createProductValidator,
} = require("../validations/product.validations");
const { isAuthorized, isAdmin } = require("../middlewares/auth");

const router = require("express").Router();

router
  .route("/")
  .get(getProducts)
  .post(
    isAuthorized,
    isAdmin,
    upload.fields([
      { name: "cover_image", maxCount: 1 },
      { name: "images", maxCount: 8 },
    ]),
    createProductValidator,
    createProduct
  );
router
  .route("/:id")
  .get(getProduct)
  .put(isAuthorized, isAdmin, updateProduct)
  .delete(isAuthorized, isAdmin, deleteProduct);
router.get("/best-selling", getBestSellingProducts);

module.exports = router;
