import { Routes, Route } from "react-router-dom";
import {
  Dashboard,
  AdminOrderDetails,
  AdminOrders,
  AdminProducts,
  CreateProduct,
  EditProduct,
  Users,
  UserEdit,
} from "./pages";
const Admin = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/orders" element={<AdminOrders />} />
      <Route path="/orders/:orderId" element={<AdminOrderDetails />} />
      <Route path="/products" element={<AdminProducts />} />
      <Route path="/products/create" element={<CreateProduct />} />
      <Route path="/products/edit/:id" element={<EditProduct />} />
      <Route path="/users" element={<Users />} />
      <Route path="/users/edit/:userId" element={<UserEdit />} />
    </Routes>
  );
};

export default Admin;
