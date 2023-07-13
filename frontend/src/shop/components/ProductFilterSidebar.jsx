import { AiOutlineMenu } from "react-icons/ai";
import Rating from "../../shared/components/Rating";
import { useState } from "react";
import RangeSlider from "../../shared/components/RangeSlider";

const ProductFilterSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        className="fixed top-4 left-0 m-4 bg-gray-800 text-white p-2 rounded-lg sm:hidden"
        onClick={toggleSidebar}
      >
        <AiOutlineMenu />
      </button>

      {/* Sidebar */}
      <div
        className={`p-6 sm:p-3 fixed top-20 sm:top-0 left-0 bg-gray-900 sm:bg-white text-white sm:text-black h-full min-h-screen w-screen sm:w-1/4 sm:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-[103%]"
        } sm:${
          isOpen ? "-left-4" : "left-0"
        } transition-transform duration-500 border-r sm:relative sm:w-auto`}
      >
        {/* Sort By */}
        <div className="flex items-center sm:justify-between gap-3 mb-5 text-black">
          <h2 className="text-2xl font-semibold sm:hidden text-white">
            Sort by
          </h2>
          <select className="p-2 rounded-sm outline-none bg-white border border-gray-300 focus:border-indigo-500">
            <option value="name">Name</option>
            <option value="price">Price</option>
            <option value="rating">Rating</option>
          </select>
        </div>

        {/* Price Range */}
        <div className="mb-3">
          <h2 className="text-2xl font-semibold mb-5">Price range</h2>
          <RangeSlider />
        </div>

        {/* Rating */}
        <div>
          <h2 className="text-2xl font-semibold mb-5">Rating</h2>

          {Array.from({ length: 5 }, (_, index) => (
            <div key={index} className=" flex items-center gap-2 mb-5">
              <input type="checkbox" />
              <Rating rating={5 - index} />
            </div>
          ))}
        </div>

        {/* Attribute 1 */}
        <div>
          <h2 className="text-2xl font-semibold mb-5">Attribute 1</h2>
          <div className="flex items-center gap-2 mb-3">
            <input type="checkbox" name="a1" />
            <label htmlFor="a1">A1</label>
          </div>
          <div className="flex items-center gap-2 mb-3">
            <input type="checkbox" name="a2" />
            <label htmlFor="a2">A2</label>
          </div>
        </div>

        {/* Attribute 2 */}
        <div>
          <h2 className="text-2xl font-semibold mb-5">Attribute 2</h2>
          <div className="flex items-center gap-2 mb-3">
            <input type="checkbox" name="a1" />
            <label htmlFor="a1">A1</label>
          </div>
          <div className="flex items-center gap-2 mb-3">
            <input type="checkbox" name="a2" />
            <label htmlFor="a2">A2</label>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductFilterSidebar;
