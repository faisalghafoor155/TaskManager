/** @format */

import { Link } from "react-router-dom";
import Logo from "./Logo";
import { IoIosRefresh } from "react-icons/io";
import { FaEye } from "react-icons/fa";
function NavBar() {
  return (
    <div className="bg-gray-100 flex justify-between shadow-md items-center w-full h-16 p-7 text-gray-900 font-sans font-medium">
      <Logo />
      <div>
        <ul className="flex justify-around gap-8">
          <li>
            <Link to="">
              <button className="bg-gray-200 p-3 rounded-md ">
                <IoIosRefresh />
              </button>
            </Link>
          </li>
          <li>
            <Link to="">
              <button className="bg-black items-center p-2  rounded-md text-white">
                Save
              </button>
            </Link>
          </li>
          <li>
            <Link to="">
              <button className="bg-sky-300 p-2  rounded-md text-white">
                Download Project
              </button>
            </Link>
          </li>
          <li>
            <Link to="">
              <button className="flex items-center gap-4 p-2  border border-gray-400 rounded-md">
                <FaEye className="text-black" />
                <span className="text-black">Preview</span>
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
