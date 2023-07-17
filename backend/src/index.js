const config = require("./config");
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectToDB = require("./config/db");
const errorMiddleware = require("./middlewares/errorMiddleware");
const categoryRoutes = require("./routes/category.routes");
const productRoutes = require("./routes/product.routes");
const authRoutes = require("./routes/auth.routes");
const logger = require("./utils/logger");

const app = express();

logger(app);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());

// routes
app.use("/api/categories", categoryRoutes);
app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);

app.use(errorMiddleware);

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
  connectToDB();
});
