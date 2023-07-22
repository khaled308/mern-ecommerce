const User = require("../models/User");
const { generateToken } = require("../services/generateToken");
const bcrypt = require("bcrypt");

exports.register = async (req, res) => {
  const user = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  const token = generateToken({
    id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
  });

  res.cookie("token", token, {
    httpOnly: true,
  });

  const { password, ...userWithoutPassword } = user._doc;
  res.status(200).json(userWithoutPassword);
};

exports.login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return res.status(404).json({ errors: ["User not found"] });
  }

  const isPasswordCorrect = await bcrypt.compare(
    req.body.password,
    user.password
  );

  if (!isPasswordCorrect) {
    return res.status(400).json({ errors: ["Invalid credentials"] });
  }

  const token = generateToken({
    id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
  });

  res.cookie("token", token, {
    httpOnly: true,
  });

  const { password, ...userWithoutPassword } = user._doc;
  res.status(200).json(userWithoutPassword);
};

exports.logout = async (req, res) => {
  res.clearCookie("token");

  res.status(200).json({ message: "User logged out successfully" });
};

exports.getUser = async (req, res) => {
  const user = await User.findById(req.user.id).select("-password");

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.status(200).json(user);
};
