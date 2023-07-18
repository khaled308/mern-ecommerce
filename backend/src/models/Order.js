const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    orderItems: [
      {
        qty: { type: Number, required: true },
        price: { type: Number, required: true },
        image: { type: String },
        product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      },
    ],
    totalPrice: { type: Number, required: true },
    shippingAddress: {
      fullName: { type: String, required: true },
      address: { type: String, required: true },
      city: { type: String },
      postalCode: { type: String },
      country: { type: String },
    },
    paymentMethod: { type: String, required: true, default: "cash" },
    isPaid: { type: Boolean, default: false },
    paidAt: { type: Date },
    isDelivered: { type: Boolean, default: false },
    deliveredAt: { type: Date },
    paymentResult: {
      id: { type: String },
      status: { type: String },
      update_time: { type: String },
      email_address: { type: String },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Order", OrderSchema);
