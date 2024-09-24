/** @format */

import { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineAssignment } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { PiSignOut } from "react-icons/pi";
import { CiLogin } from "react-icons/ci";
import { FaInbox, FaSignal } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { SiGoogledocs } from "react-icons/si";
import { BsCameraVideo } from "react-icons/bs";
import { RiTimerLine } from "react-icons/ri";

function SideBar() {
  const [activeLink, setActiveLink] = useState("dashboard");

  const sidebarItems = [
    { name: "Home", icon: <IoHomeOutline />, to: "home" },
    { name: "Inbox", icon: <FaInbox />, to: "inbox" },
    { name: "Docs", icon: <SiGoogledocs />, to: "docs" },
    {
      name: "Dashboard",
      icon: <FaSignal />,
      to: "dashboard",
    },
    { name: "Clips", icon: <BsCameraVideo />, to: "clip" },
    { name: "Timesheets", icon: <RiTimerLine />, to: "time" },
  ];

  const accountItems = [
    { name: "Profile", icon: <CgProfile />, to: "profile" },
    { name: "Sign Out", icon: <PiSignOut />, to: "signout" },
    { name: "Sign Up", icon: <MdOutlineAssignment />, to: "signin" },
    { name: "Login", icon: <CiLogin />, to: "login" },
  ];

  return (
    <div className="h-full w-80 bg-gray-100 text-gray-700  p-3 border  border-gray-200 border-r-1">
      <h1 className="font-semibold mb-4 p-2 border-b-2 border-b-gray-200 w-full text-center">
        Material Dashboard
      </h1>

      <ul className="h-[100%] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 text-center">
        {sidebarItems.map((item) => (
          <li key={item.to} className="flex justify-center pt-1 font-normal">
            <Link
              to={item.to}
              className={`flex items-center px-6 py-2 rounded-md gap-4 w-full h-12 ${
                activeLink === item.to ? "bg-blue-200" : "hover:bg-gray-300"
              }`}
              onClick={() => setActiveLink(item.to)}
            >
              <span>{item.icon}</span>
              {item.name}
            </Link>
          </li>
        ))}

        <div className="flex items-center justify-center pt-4 font-semibold">
          <h3 className="mb-4 mt-4">ACCOUNT PAGES</h3>
        </div>

        {accountItems.map((item) => (
          <li key={item.to} className="flex justify-center pt-1 font-normal">
            <Link
              to={item.to}
              className={`flex items-center px-6 py-2 rounded-md gap-4 w-full h-12 ${
                activeLink === item.to
                  ? "bg-blue-200 text-white"
                  : "hover:bg-gray-300"
              }`}
              onClick={() => setActiveLink(item.to)}
            >
              <span>{item.icon}</span>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex items-center justify-center font-semibold mt-4">
        <button className="bg-orange-400 flex justify-center items-center rounded-md gap-4 w-full h-12">
          DOCS
        </button>
      </div>
    </div>
  );
}

export default SideBar;
