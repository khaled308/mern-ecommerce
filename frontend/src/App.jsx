import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./shop/Shop";
import Admin from "./admin/Admin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Shop />} />
        <Route path="/admin/*" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
