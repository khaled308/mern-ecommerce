const {
  getUsers,
  getUser,
  createUser,
  deleteUser,
  makeAdmin,
  updateUser,
} = require("../controllers/user.controller");
const { isAuth, isAdmin, isAuthorized } = require("../middlewares/auth");

const router = require("express").Router();

router
  .route("/")
  // .get(isAuth, isAdmin, getUsers)
  .get(getUsers)
  .post(isAuth, isAdmin, createUser);

router
  .route("/:userId")
  .get(isAuth, isAuthorized, getUser)
  .put(isAuth, isAuthorized, updateUser)
  .delete(isAuth, isAuthorized, deleteUser)
  .put(isAuth, isAdmin, makeAdmin);

module.exports = router;
