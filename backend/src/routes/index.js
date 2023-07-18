const authRoutes = require("./auth.routes");
const categoryRoutes = require("./category.routes");
const productRoutes = require("./product.routes");
const userRoutes = require("./user.routes");
const orderRoutes = require("./order.routes");

module.exports = (app) => {
  app.use("/api/auth", authRoutes);
  app.use("/api/categories", categoryRoutes);
  app.use("/api/products", productRoutes);
  app.use("/api/users", userRoutes);
  app.use("/api/orders", orderRoutes);
};
