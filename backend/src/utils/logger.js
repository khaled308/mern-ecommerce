const logger = (app) => {
  console.log("Logger enabled");
  if (process.env.ENV === "development") {
    const morgan = require("morgan");
    app.use(morgan("dev"));
  }
};

module.exports = logger;
