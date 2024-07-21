import React, { useContext } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { HiOutlineMenu } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import { FaAngleDoubleRight } from "react-icons/fa";
import { TfiMenuAlt } from "react-icons/tfi";
import { MdOutlineCalendarToday } from "react-icons/md";
import { FaNoteSticky } from "react-icons/fa6";
import { IoAddCircleOutline } from "react-icons/io5";
import { RiMenu5Fill } from "react-icons/ri";
import { PiSignOutBold } from "react-icons/pi";

const Aside = () => {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();

  function logOut() {
    setUser(null);
    localStorage.removeItem("user");
    navigate("/login", { replace: true });
  }

  return (
    <aside className="bg-[#F4F4F4] w-full md:w-2/4 lg:w-2/6 space-y-7 py-2 px-6 rounded-2xl">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-3xl font-semibold">Menu</h3>
        <HiOutlineMenu className="text-2xl cursor-pointer" />
      </div>

      <div className="flex items-center w-2/3 bg-slate-200 rounded-2xl p-3 text-slate-900">
        <label htmlFor="search">
          <FiSearch className="text-slate-900 mr-4 cursor-pointer" />
        </label>
        <input
          type="text"
          placeholder="Search..."
          name="search"
          id="search"
          className="flex-1 bg-transparent outline-none placeholder:text-slate-800 font-normal"
        />
      </div>

      <div>
        <h4 className="text-xl font-bold mb-2">Tasks</h4>
        <ul className="space-y-3 pl-2">
          <li>
            <NavLink
              to="/upComing"
              className={({ isActive }) =>
                `${
                  isActive ? "bg-slate-200" : ""
                } flex justify-between items-center text-gray-700 hover:text-gray-900 cursor-pointer rounded-2xl p-2`
              }
            >
              <span className="flex items-center">
                <FaAngleDoubleRight className="mr-2" />
                Upcoming
              </span>

              <span className="bg-slate-300 rounded-2xl py-1 px-2">
                {Math.floor(Math.random() * 25)}
              </span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/today"
              className={({ isActive }) =>
                `${
                  isActive ? "bg-slate-200" : ""
                } flex justify-between items-center text-gray-700 hover:text-gray-900 cursor-pointer rounded-2xl p-2`
              }
            >
              <span className="flex items-center">
                <TfiMenuAlt className="mr-2" />
                Today
              </span>

              <span className="bg-slate-300 rounded-2xl py-1 px-2">
                {Math.floor(Math.random() * 25)}
              </span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/calendar"
              className={({ isActive }) =>
                `${
                  isActive ? "bg-slate-200" : ""
                } flex items-center text-gray-700 hover:text-gray-900 cursor-pointer rounded-2xl p-2`
              }
            >
              <MdOutlineCalendarToday className="mr-2" />
              Calendar
            </NavLink>
          </li>

          <li className="flex items-center text-gray-700 hover:text-gray-900 cursor-pointer">
            <FaNoteSticky className="mr-2" />
            Sticky Wall
          </li>
        </ul>
      </div>

      <div>
        <h4 className="text-xl font-bold mb-2">Lists</h4>
        <ul className="space-y-2 pl-3">
          <li className="text-gray-700 hover:text-gray-900 cursor-pointer bg-slate-200 rounded-2xl py-1 px-5 flex items-center">
            <span className="w-6 h-4 bg-red-500 rounded-lg inline-block mr-2"></span>
            Work
          </li>

          <li className="text-gray-700 hover:text-gray-900 cursor-pointer bg-slate-200 rounded-2xl py-1 px-5 flex items-center">
            <span className="w-6 h-4 bg-green-500 rounded-lg inline-block mr-2"></span>
            Personal
          </li>

          <li className="text-gray-700 hover:text-gray-900 cursor-pointer bg-slate-200 rounded-2xl py-1 px-5 flex items-center">
            <span className="w-6 h-4 bg-blue-500 rounded-lg inline-block mr-2"></span>
            Study
          </li>

          <li className="flex items-center text-gray-700 hover:text-gray-900 cursor-pointer">
            <IoAddCircleOutline className="mr-2 size-6" />
            Add new List
          </li>
        </ul>
      </div>

      <div className="space-y-3 pt-8">
        <div className="flex items-center text-gray-700 hover:text-gray-900 text-xl cursor-pointer">
          <RiMenu5Fill className="mr-2" />
          Settings
        </div>
        <button
          onClick={logOut}
          className="flex items-center text-gray-700 hover:text-gray-900 text-xl cursor-pointer"
        >
          <PiSignOutBold className="mr-2" />
          Sign Out
        </button>
      </div>
    </aside>
  );
};

export default Aside;
