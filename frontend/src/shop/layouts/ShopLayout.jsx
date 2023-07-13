/* eslint-disable react/prop-types */
import Header from "../components/Header";
import Footer from "../components/Footer";
import Chat from "../../shared/components/Chat";
import ScrollToTop from "../../shared/components/ScrollToTop";

const ShopLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="p-2 sm:p-4 py-4 flex-1">
        {children}
        <Chat />
        <ScrollToTop />
      </div>
      <Footer />
    </div>
  );
};

export default ShopLayout;
