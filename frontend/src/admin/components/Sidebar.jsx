import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  return (
    <div className="flex flex-col gap-4 bg-slate-300 p-8 self-start">
      <Link
        to="/admin"
        className={`btn btn-primary transition-colors duration-300 hover:text-blue-500 hover:pl-2 ${
          location.pathname === "/admin" ? "text-blue-600" : ""
        }`}
      >
        Dashboard
      </Link>
      <Link
        to="/admin/products"
        className={`btn btn-primary transition-colors duration-300 hover:text-blue-500 hover:pl-2 ${
          location.pathname === "/admin/products" ? "text-blue-600" : ""
        }`}
      >
        Products
      </Link>
      <Link
        to="/admin/orders"
        className={`btn btn-primary transition-colors duration-300 hover:text-blue-500 hover:pl-2 ${
          location.pathname === "/admin/orders" ? "text-blue-600" : ""
        }`}
      >
        Orders
      </Link>
      <Link
        to="/admin/users"
        className={`btn btn-primary transition-colors duration-300 hover:text-blue-500 hover:pl-2 ${
          location.pathname === "/admin/users" ? "text-blue-600" : ""
        }`}
      >
        Users
      </Link>
    </div>
  );
};

export default Sidebar;
