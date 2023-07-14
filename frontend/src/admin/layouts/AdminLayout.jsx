/* eslint-disable react/prop-types */
import Header from "../components/Header";
import Footer from "../components/Footer";
import Chat from "../../shared/components/Chat";
import ScrollToTop from "../../shared/components/ScrollToTop";
import Sidebar from "../components/Sidebar";

const AdminLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="p-2 sm:p-4 py-4 flex-1 flex gap-2 flex-wrap w-screen">
        <Sidebar />
        <div className="flex-1 max-w-full">{children}</div>
        <Chat />
        <ScrollToTop />
      </div>
      <Footer />
    </div>
  );
};

export default AdminLayout;
