const {
  getProducts,
  getBestSellingProducts,
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller");

const router = require("express").Router();

router.route("/").get(getProducts).post(createProduct);
router.route("/:id").get(getProduct).put(updateProduct).delete(deleteProduct);
router.get("/best-selling", getBestSellingProducts);

module.exports = router;
