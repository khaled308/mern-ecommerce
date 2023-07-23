/* eslint-disable react/prop-types */
import Header from "../components/Header";
import Footer from "../components/Footer";
import Chat from "../../shared/components/Chat";
import ScrollToTop from "../../shared/components/ScrollToTop";
import Sidebar from "../components/Sidebar";
import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "../../shared/components/Loader";
import useAuth from "../../hooks/useAuth";

const AdminLayout = ({ children }) => {
  const { isLoading, isError, user } = useAuth();
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      setAuthChecked(true);
    }
  }, [isLoading]);

  if (!authChecked) {
    return <Loader />;
  }

  if (isError || (authChecked && user && user.role !== "admin")) {
    return <Navigate to="/login" />;
  }

  return user && user.role === "admin" ? (
    <div className="flex flex-col min-h-screen w-screen overflow-hidden max-w-full">
      <Header />
      <div className="p-2 sm:p-4 py-4 flex-1 flex gap-2 flex-wrap w-screen">
        <Sidebar />
        <div className="flex-1 max-w-full">{children}</div>
        <Chat />
        <ScrollToTop />
      </div>
      <Footer />
    </div>
  ) : (
    <Loader />
  );
};

export default AdminLayout;
