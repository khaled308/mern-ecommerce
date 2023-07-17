const mongoose = require("mongoose");
require("./User");

const reviewSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Types.ObjectId, ref: "User" },
    comment: { type: String, required: true },
    rating: { type: Number, required: true },
  },
  {
    timestamps: true,
    virtuals: true,
  }
);

module.exports = mongoose.model("Review", reviewSchema);
