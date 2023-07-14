const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    image: { type: String },
    description: { type: String },
    cover_image: { type: String },
    attrs: [
      {
        name: { type: String, required: true },
        values: [{ type: String, required: true }],
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Category", CategorySchema);
