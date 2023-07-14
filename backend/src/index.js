require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectToDB = require("./config/db");
const errorMiddleware = require("./middlewares/errorMiddleware");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
  connectToDB();
});
