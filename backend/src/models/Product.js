const mongoose = require("mongoose");
require("./Category");
require("./Review");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  price: { type: Number, required: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
  description: { type: String, required: true },
  cover_image: { type: String, required: true },
  images: [{ type: String }],
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],
  rating: { type: Number, default: 0 },
  numReviews: { type: Number, default: 0 },
  sales: { type: Number, default: 0 },
  stock: { type: Number, default: 0 },
  attrs: [
    {
      name: { type: String, required: true },
      values: [{ type: String, required: true }],
      price: { type: Number },
      stock: { type: Number },
      sales: { type: Number, default: 0 },
    },
  ],
});

productSchema.index(
  { name: "text", description: "text" },
  { name: "TextIndex" }
);

productSchema.index({ "attrs.key": 1, "attrs.values": 1 });

module.exports = mongoose.model("Product", productSchema);
