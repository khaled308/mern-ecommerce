const {
  getReviews,
  createReview,
  deleteReview,
  updateReview,
} = require("../controllers/review.controller");
const { isAuth, isAuthorized } = require("../middlewares/auth");

const router = require("express").Router({ mergeParams: true });

router.route("/").get(getReviews).post(isAuth, createReview);
router
  .route("/:reviewId")
  .delete(isAuthorized, deleteReview)
  .put(isAuthorized, updateReview);

module.exports = router;
