const {
  register,
  login,
  logout,
  getUser,
} = require("../controllers/auth.controller");
const { isAuth } = require("../middlewares/auth");
const { registerValidate } = require("../validations/auth.validations");

const router = require("express").Router();

router.post("/register", registerValidate, register);
router.post("/login", login);
router.get("/logout", logout);
router.get("/user", isAuth, getUser);

module.exports = router;
