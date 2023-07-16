const config = require("../config");
const logger = (app) => {
  console.log("Logger enabled");
  if (config.node_env === "development") {
    const morgan = require("morgan");
    app.use(morgan("dev"));
  }
};

module.exports = logger;
