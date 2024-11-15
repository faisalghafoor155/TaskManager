/** @format */
import { useRef } from "react";
import logo from "../../public/Assets/comrex_logo.svg";

function Logo() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-8 lg:gap-8">
      <img src={logo} alt="Logo" height={120} width={120} />
      <input
        type="text"
        placeholder="Search"
        className="border border-gray-800 bg-gray-200 shadow-md rounded-lg p-1 w-full md:w-full lg:w-full"
      />
    </div>
  );
}

export default Logo;
