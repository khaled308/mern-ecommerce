const config = require("../config");

const errorMiddleware = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode).json({
    message: err.message,
    stack: config.node_env === "production" ? null : err.stack,
  });
};

module.exports = errorMiddleware;
