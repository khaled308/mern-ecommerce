/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from "react";
import { FaTimes } from "react-icons/fa";

const Alert = ({ type, message, onClose, onConfirm }) => {
  const [isVisible, setIsVisible] = useState(true);
  const alertRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (alertRef.current && !alertRef.current.contains(event.target)) {
        setIsVisible(false);
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    onClose();
  };

  const handleConfirm = () => {
    setIsVisible(false);
    onConfirm();
  };

  let alertClasses = "";

  if (type === "success") {
    alertClasses = "bg-green-500 text-white";
  } else if (type === "error") {
    alertClasses = "bg-red-500 text-white";
  } else if (type === "warning") {
    alertClasses = "bg-yellow-500 text-black";
  } else if (type === "info") {
    alertClasses = "bg-blue-500 text-white";
  }

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center transition-all duration-300 transform ${
        isVisible ? "" : "translate-y-full"
      }`}
    >
      <div
        className={`p-4 mb-4 rounded w-full max-w-[600px] mx-auto relative justify-center items-center flex flex-col gap-3 ${alertClasses}`}
        ref={alertRef}
      >
        <button
          className="text-red ml-2 absolute top-2 right-2"
          onClick={handleDismiss}
        >
          <FaTimes />
        </button>
        <p>{message}</p>
        <button
          className="text-white bg-blue-500 py-2 px-4 rounded"
          onClick={handleConfirm}
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default Alert;
