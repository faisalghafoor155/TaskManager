/** @format */

import { BsPlus, BsThreeDots } from "react-icons/bs";
import { IoAppsOutline } from "react-icons/io5";
import { MdCloseFullscreen } from "react-icons/md";

function CardsComponents({
  width,
  height,
  title,
  heading,
  paragh,
  icon,
  icon2,
  btn,
  customDatePicker,
  // eslint-disable-next-line react/prop-types
  btn2,
}) {
  return (
    <div
      className={`border rounded-lg shadow-md mb-4 mt-8 bg-white p-4 hover:outline hover:outline-2 hover:outline-gray-300 ${width} ${height}`}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center group text-gray-500 font-bold">
          <span className="flex gap-3 justify-center items-center">
            <IoAppsOutline className="opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <h1 className="text-center">{title}</h1>
          </span>
        </div>

        <div className="flex gap-3 group">
          <BsPlus className="opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <MdCloseFullscreen className="opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <BsThreeDots className="opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
      </div>

      <div className="flex justify-between items-center border-b-2 p-2 mt-2">
        <div className="flex gap-4 items-center">{btn2}</div>
        {customDatePicker && (
          <div className="text-gray-600">{customDatePicker}</div>
        )}
      </div>

      <div className="flex justify-center items-center mt-16">
        {icon} {icon2}
      </div>
      <div className="flex flex-col justify-center items-center mt-2 mb-8 text-gray-500">
        <h2>{heading}</h2>
        <p className="text-gray-400">{paragh}</p>
        {btn}
      </div>
    </div>
  );
}

export default CardsComponents;
