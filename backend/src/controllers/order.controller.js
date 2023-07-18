const Order = require("../models/Order");
const User = require("../models/User");
const { calculateOrderPrice } = require("../services/orderPrice");
const { stripePayment } = require("../services/stripePayment");
const ApiFeatures = require("../utils/ApiFeatures");

exports.createOrder = async (req, res) => {
  const { orderItems, shippingAddress, paymentMethod } = req.body;
  const user = await User.findById(req.user.id);
  const { orderItemsWithPrice, totalPrice } = await calculateOrderPrice(
    orderItems
  );

  const order = await Order.create({
    user: user._id,
    orderItems: orderItemsWithPrice,
    shippingAddress,
    paymentMethod: paymentMethod || "cash",
    totalPrice,
  });

  if (paymentMethod === "card") {
    const session = await stripePayment(orderItemsWithPrice, order);
    res.status(201).json({ id: session.id, url: session.url });
  } else {
    res.status(201).json({ order });
  }
};

exports.getUserOrders = async (req, res) => {
  const documentsCount = await Order.countDocuments({ user: req.user.id });
  let mongoQuery = Order.find({ user: req.user.id }).populate(
    "user",
    "name email"
  );
  const apiFeatures = new ApiFeatures(mongoQuery, req.query)
    .paginate(documentsCount)
    .sort()
    .filter()
    .filterByCategory();

  const orders = await apiFeatures.mongooseQuery;
  res.status(200).json({
    orders,
    pagination: apiFeatures.pagination,
  });
};

exports.getOrderById = async (req, res) => {
  const order = await Order.findById(req.params.id).populate(
    "user",
    "name email"
  );
  if (!order) {
    return res.status(404).json({ message: "Order not found" });
  }
  res.json(order);
};

exports.updateOrderToPaid = async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (!order) {
    return res.status(404).json({ message: "Order not found" });
  }
  order.isPaid = true;
  order.paidAt = Date.now();
  order.paymentResult = {
    id: req.body.id,
    status: req.body.status,
    email_address: req.body.email_address,
  };
  const updatedOrder = await order.save();
  res.json(updatedOrder);
};

exports.updateOrderToDelivered = async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (!order) {
    return res.status(404).json({ message: "Order not found" });
  }
  order.isDelivered = true;
  order.deliveredAt = Date.now();
  const updatedOrder = await order.save();
  res.json(updatedOrder);
};

exports.getOrders = async (req, res) => {
  const documentsCount = await Order.countDocuments();
  let mongoQuery = Order.find({}).populate("user", "name email");
  const apiFeatures = new ApiFeatures(mongoQuery, req.query)
    .paginate(documentsCount)
    .sort()
    .filter()
    .filterByCategory();

  const orders = await apiFeatures.mongooseQuery;
  res.status(200).json({
    orders,
    pagination: apiFeatures.pagination,
  });
};
