/** @format */

// NavList.js
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const NavList = ({ navData, activeItem }) => {
  return (
    <ul className="flex flex-wrap items-center gap-8 w-full text-gray-500 text-lg md:text-xl font-semibold">
      {navData.map((item, index) => (
        <li key={index} className="flex-grow md:flex-none">
          <Link
            to={item.link}
            className={`flex items-center jusitfy-center text-sm md:text-base rounded-md gap-4 w-full p-2 hover:bg-gray-100 transition-colors duration-200 ${
              activeItem === item.link ? "text-gray-800 font-semibold" : ""
            }`}
          >
            <button className="flex items-center justify-center p-2 border rounded-md hover:bg-gray-200 border-none">
              <span className="flex justify-center items-center gap-2">
                {item.icon}
                {item.label}
              </span>
            </button>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavList;
