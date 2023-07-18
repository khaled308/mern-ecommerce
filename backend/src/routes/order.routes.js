const {
  createOrder,
  getUserOrders,
  getOrders,
  updateOrderToDelivered,
  updateOrderToPaid,
} = require("../controllers/order.controller");
const { isAuth, isAdmin } = require("../middlewares/auth");

const router = require("express").Router();

router.route("/").post(isAuth, createOrder).get(isAuth, getUserOrders);
router.route("/all").get(isAdmin, getOrders);
router.put("/:id/pay", isAuth, updateOrderToPaid);
router.put("/:id/deliver", isAuth, isAdmin, updateOrderToDelivered);

module.exports = router;
