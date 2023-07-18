const Product = require("../models/Product");

exports.calculateOrderPrice = async (orderItems) => {
  const productIds = orderItems.map((item) => item.product);
  const products = await Product.find({ _id: { $in: productIds } });

  const orderItemsWithPrice = orderItems.map((item) => {
    const product = products.find(
      (product) => product._id.toString() === item.product.toString()
    );
    const price = product.price * item.qty;

    return {
      ...item,
      price,
      product,
    };
  });

  const totalPrice = orderItemsWithPrice.reduce(
    (acc, item) => acc + item.price,
    0
  );

  return {
    orderItemsWithPrice,
    totalPrice,
  };
};
