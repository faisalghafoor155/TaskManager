/** @format */

// NavList.js
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const NavList = ({ navData, activeItem }) => {
  return (
    <ul className="flex gap-8 w-full text-gray-500 text-xl font-semibold">
      {navData.map((item, index) => (
        <li key={index}>
          <Link
            to={item.link}
            className={`flex items-center text-sm rounded-md gap-4 w-full  ${
              activeItem === item.link ? "text-gray-800 font-semibold" : ""
            }`}
          >
            <span className="flex justify-center items-center gap-2 ">
              {item.icon}
              {item.label}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavList;
