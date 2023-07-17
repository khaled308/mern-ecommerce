const config = require("./config");
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectToDB = require("./config/db");
const errorMiddleware = require("./middlewares/errorMiddleware");
const routes = require("./routes");
const logger = require("./utils/logger");

const app = express();

logger(app);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());

// routes
routes(app);

app.use(errorMiddleware);

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
  connectToDB();
});
