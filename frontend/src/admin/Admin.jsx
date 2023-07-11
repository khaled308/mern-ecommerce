import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages";
const Admin = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
};

export default Admin;
