require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectToDB = require("./config/db");
const errorMiddleware = require("./middlewares/errorMiddleware");
const categoryRoutes = require("./routes/category.routes");
const logger = require("./utils/logger");

const app = express();

logger(app);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// routes
app.use("/api/categories", categoryRoutes);

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
  connectToDB();
});
