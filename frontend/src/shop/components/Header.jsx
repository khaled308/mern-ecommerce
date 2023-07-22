import { NavLink, useLocation } from "react-router-dom";
import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";
import DropDown from "../../shared/components/DropDown";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../../features/auth/authSlice";

const Search = () => {
  return (
    <div className="flex justify-center relative h-7">
      <DropDown
        className="absolute left-0 top-0 h-full"
        options={["All", "test1", "test2"]}
      />

      <input
        type="text"
        className="h-full pl-1 bg-gray-100 rounded-r text-black focus:outline-none focus:ring focus:border-blue-300"
        placeholder="Search"
      />

      <button className="absolute right-0 bg-orange-400 h-full text-white outline-none p-2">
        <AiOutlineSearch />
      </button>
    </div>
  );
};

const Links = () => {
  const location = useLocation();
  const { isError } = useSelector((state) => state.auth);

  return (
    <ul className="flex items-center justify-center gap-3 mt-4 sm:mt-0">
      {isError && (
        <>
          <li>
            <NavLink
              to="/register"
              className={`text-white ${
                location.pathname === "/register" ? "text-blue-300" : ""
              }`}
            >
              Register
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={`text-white ${
                location.pathname === "/login" ? "text-blue-300" : ""
              }`}
            >
              Login
            </NavLink>
          </li>
        </>
      )}
      <li>
        <NavLink
          to="/cart"
          className={`flex items-center text-white ${
            location.pathname === "/cart" ? "text-blue-300" : ""
          }`}
        >
          <AiOutlineShoppingCart className="mr-2" /> Cart
          <span className="bg-red-500 text-white rounded-full px-2 -ml-1 -mt-3">
            5
          </span>
        </NavLink>
      </li>
    </ul>
  );
};

const Header = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <header className="flex flex-col sm:flex-row justify-between bg-slate-700 text-white px-1 sm:px-4 py-3">
      <div className="flex items-center justify-center gap-1 sm:gap-2">
        <NavLink
          to="/"
          className={`text-white font-bold uppercase ${
            location.pathname === "/" ? "text-orange-600" : "text-orange-400"
          }`}
        >
          Shop
        </NavLink>
        <Search />
      </div>
      <Links />
    </header>
  );
};

export default Header;
