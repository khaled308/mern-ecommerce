import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Shop from "./shop/Shop";
import Admin from "./admin/Admin";

function App() {
  axios.defaults.baseURL = "http://localhost:8000/api";
  axios.defaults.withCredentials = true;
  return (
    <>
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="*" element={<Shop />} />
          <Route path="/admin/*" element={<Admin />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
