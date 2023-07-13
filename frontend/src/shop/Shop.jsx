import { Routes, Route } from "react-router-dom";
import {
  Home,
  Login,
  Register,
  UserProfile,
  ProductsList,
  ProductDetails,
  Cart,
  UserOrders,
  UserOrderDetails,
} from "./pages";
import ProtectedRoute from "./components/ProtectedRoute";

const Shop = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsList />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user/*" element={<ProtectedRoute />}>
          <Route index element={<UserProfile />} />
          <Route path=":id/orders" element={<UserOrders />} />
          <Route
            path=":userId/orders/:orderId"
            element={<UserOrderDetails />}
          />
        </Route>
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </>
  );
};

export default Shop;
