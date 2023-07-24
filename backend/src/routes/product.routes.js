const {
  getProducts,
  getBestSellingProducts,
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
  getProductByName,
} = require("../controllers/product.controller");
const { upload } = require("../middlewares/multer");
const {
  createProductValidator,
} = require("../validations/product.validations");
const { isAuth, isAdmin } = require("../middlewares/auth");
const reviewRoutes = require("./review.routes");

const router = require("express").Router();

router
  .route("/")
  .get(getProducts)
  .post(
    isAuth,
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
  .put(isAuth, isAdmin, updateProduct)
  .delete(isAuth, isAdmin, deleteProduct);
router.get("/best-selling", getBestSellingProducts);
router.get("/product-name/:name", getProductByName);

router.use("/:productId/reviews", reviewRoutes);

module.exports = router;
