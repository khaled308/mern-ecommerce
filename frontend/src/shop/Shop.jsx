import { Routes, Route } from "react-router-dom";
import { Home, Login, Register, UserProfile, ProductsList } from "./pages";
import ProtectedRoute from "./components/ProtectedRoute";

const Shop = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user/*" element={<ProtectedRoute />}>
          <Route index element={<UserProfile />} />
        </Route>
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </>
  );
};

export default Shop;
