const jwt = require("jsonwebtoken");
const config = require("../config");

exports.generateToken = (user) => {
  return jwt.sign(user, config.jwtSecret, {
    expiresIn: "30d",
  });
};
