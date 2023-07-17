const { register, login, logout } = require("../controllers/auth.controller");
const { registerValidate } = require("../validations/auth.validations");

const router = require("express").Router();

router.post("/register", registerValidate, register);
router.post("/login", login);
router.get("/logout", logout);

module.exports = router;
