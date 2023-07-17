const Review = require("../models/Review");
const Product = require("../models/Product");

exports.createReview = async (req, res) => {
  const product = await Product.findById(req.params.productId).populate(
    "reviews"
  );
  let alreadyReviewed = false;

  for (const review of product.reviews) {
    if (String(review.user) === String(req.user.id)) {
      alreadyReviewed = true;
      break;
    }
  }

  if (alreadyReviewed) {
    return res
      .status(400)
      .json({ message: "You already reviewed this product" });
  }

  const review = await Review.create({
    user: req.user.id,
    comment: req.body.comment,
    rating: +req.body.rating,
  });

  product.reviews.push(review);
  product.numReviews = product.reviews.length;
  product.rating =
    product.reviews.reduce((acc, item) => item.rating + acc, 0) /
    product.reviews.length;
  await product.save();

  return res.status(201).json(product);
};

exports.getReviews = async (req, res) => {
  const product = await Product.findById(req.params.productId).populate({
    path: "reviews",
    populate: { path: "user", select: "name", model: "User" },
  });
  res.json(product.reviews);
};

exports.deleteReview = async (req, res) => {
  const product = await Product.findById(req.params.productId).populate(
    "reviews"
  );

  product.reviews = product.reviews.filter(
    (review) => String(review._id) !== String(req.params.reviewId)
  );
  product.numReviews = product.reviews.length;
  product.rating =
    product.reviews.reduce((acc, item) => item.rating + acc, 0) /
    product.reviews.length;
  await product.save();

  await Review.findByIdAndDelete(req.params.reviewId);

  res.json({ message: "Review deleted successfully" });
};

exports.updateReview = async (req, res) => {
  const review = await Review.findById(req.params.reviewId);

  review.comment = req.body.comment || review.comment;
  review.rating = req.body.rating || review.rating;
  review.save();

  res.json(review);
};
