import { Link } from "react-router-dom";
import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";

const Search = () => {
  return (
    <div className="flex justify-center">
      <select className="h-full flex items-center whitespace-nowrap rounded-l border border-r-0 border-solid border-blue-300 py-1 text-center text-sm font-normal leading-normal text-blue-700 bg-blue-100 dark:border-blue-600 dark:text-blue-200 dark:placeholder-text-blue-200 outline-none">
        <option value="all">All</option>
        <option value="test1">test1</option>
        <option value="test2">test2</option>
      </select>
      <div className="container relative">
        <input
          type="text"
          className="h-full pl-1 bg-gray-100 rounded-r text-black focus:outline-none focus:ring focus:border-blue-300"
          placeholder="Search"
        />

        <button className="absolute right-0 bg-orange-400 h-full text-white outline-none p-2">
          <AiOutlineSearch />
        </button>
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row justify-between bg-slate-700 text-white px-1 sm:px-4 py-2">
      <div className="flex items-center gap-1 sm:gap-2">
        <Link to="/" className="text-xl font-bold">
          Shop
        </Link>
        <Search />
      </div>
      <ul className="flex items-center justify-center gap-3 mt-2 sm:mt-0">
        <li>
          <Link to="/register" className="text-white">
            Register
          </Link>
        </li>
        <li>
          <Link to="/login" className="text-white">
            Login
          </Link>
        </li>
        <li>
          <Link to="/cart" className="flex items-center text-white">
            <AiOutlineShoppingCart className="mr-2" /> Cart
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
