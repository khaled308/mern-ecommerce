/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from "react";

const DropDown = ({ className, options, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options?.[0] || "");
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onChange(option);
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={dropdownRef}
      className={`relative inline-flex bg-white border ${className}`}
    >
      <button
        type="button"
        onClick={toggleDropdown}
        className="inline-flex items-center justify-between h-full px-4 py-2 text-sm text-gray-600 hover:text-gray-700 hover:bg-gray-50 rounded-md"
      >
        {selectedOption || options?.[0]}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`w-4 h-4 ${isOpen ? "transform rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute left-0 z-10 w-56 mt-8 origin-top-right bg-white border border-gray-100 rounded-md shadow-lg">
          <div className="p-2">
            {options?.map((option, index) => (
              <span
                onClick={() => handleOptionClick(option)}
                className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700 cursor-pointer"
                key={index}
              >
                {option}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropDown;
