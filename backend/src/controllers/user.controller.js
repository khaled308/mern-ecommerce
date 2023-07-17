const User = require("../models/User");

exports.getUsers = async (req, res) => {
  const users = await User.find({});
  res.status(200).json(users);
};

exports.getUser = async (req, res) => {
  const { userId } = req.params;
  const user = await User.findById(userId);
  res.status(200).json(user);
};

exports.updateUser = async (req, res) => {
  const { userId } = req.params;
  const fields = ["name", "email", "password"];
  const userData = {};
  fields.forEach((field) => {
    if (req.body[field]) userData[field] = req.body[field];
  });
  const user = await User.findByIdAndUpdate(userId, userData, {
    new: true,
  });

  res.status(200).json(user);
};

exports.deleteUser = async (req, res) => {
  const { userId } = req.params;
  await User.findByIdAndDelete(userId);
  res.status(200).json({ message: "User deleted successfully" });
};

exports.createUser = async (req, res) => {
  const user = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    role: req.body.role || "user",
  });
  res.status(201).json(user);
};

exports.makeAdmin = async (req, res) => {
  const { userId } = req.params;
  const user = await User.findByIdAndUpdate(
    userId,
    { role: "admin" },
    { new: true }
  );

  res.status(200).json(user);
};
