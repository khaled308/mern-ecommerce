const jwt = require("jsonwebtoken");

exports.isAuth = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const data = jwt.verify(token, process.env.JWT_SECRET);
    req.user = data;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};

exports.isAdmin = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Forbidden" });
  }
  next();
};

exports.isAuthorized = (req, res, next) => {
  const { userId } = req.params;
  if (req.user.role !== "admin" && req.user.id !== userId) {
    return res.status(403).json({ message: "Forbidden" });
  }
  next();
};
