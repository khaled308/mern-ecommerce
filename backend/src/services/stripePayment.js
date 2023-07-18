const config = require("../config");

const stripe = require("stripe")(config.stripeSecretKey);

exports.stripePayment = async (orderItems, order) => {
  const session = await stripe.checkout.sessions.create({
    line_items: orderItems.map((item) => {
      return {
        price_data: {
          currency: "usd",
          product_data: {
            name: item.product.name,
          },
          unit_amount: item.price * 100,
        },
        quantity: item.qty,
      };
    }),
    mode: "payment",
    success_url: `${
      config.node_env === "development"
        ? config.clientDevUrl
        : config.clientProdUrl
    }/order/${order._id}`,
    cancel_url: `${
      config.node_env === "development"
        ? config.clientDevUrl
        : config.clientProdUrl
    }/cart`,
  });

  return session;
};
