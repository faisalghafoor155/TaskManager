/** @format */

import { useState } from "react";
import { Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { FaInbox, FaRegRegistered, FaSignal } from "react-icons/fa";
import { SiGoogledocs } from "react-icons/si";
import { BsCameraVideo } from "react-icons/bs";
import { RiTimerLine } from "react-icons/ri";
import { CiCircleMore, CiLogin, CiTrophy, CiViewBoard } from "react-icons/ci";
import { FaChartPie } from "react-icons/fa";
import { MdOutlineInbox } from "react-icons/md";
function SideBar() {
  const [activeLink, setActiveLink] = useState("dashboard");
  const [show, setShow] = useState(false);

  const sidebarItems = [
    { name: "Dashboard", icon: <FaSignal />, to: "Dashboard" },
    { name: "Chart", icon: <FaChartPie />, to: "Chart" },
    { name: "Tasks", icon: <FaInbox />, to: "tasks" },
    { name: "Chats", icon: <RiTimerLine />, to: "chats" },
    { name: "Inbox", icon: <MdOutlineInbox />, to: "inbox" },
    { name: "Home", icon: <IoHomeOutline />, to: "home" },
    { name: "Clips", icon: <BsCameraVideo />, to: "clip" },
    { name: "Timesheets", icon: <RiTimerLine />, to: "time" },
  ];

  const moreItems = [
    { name: "WhiteBoard", icon: <CiViewBoard />, to: "whiteboard" },
    { name: "Goals", icon: <CiTrophy />, to: "goal" },
  ];

  const accountItems = [
    { name: "Login", icon: <CiLogin />, to: "login" },
    { name: "Register", icon: <FaRegRegistered />, to: "register" },
  ];

  return (
    <div className="h-screen w-full bg-gray-100 text-gray-700 p-4 border-r border-gray-200 hidden md:flex flex-col">
      <h1 className="font-semibold mb-4 p-2 border-b-2 border-b-gray-200 text-center mt-8">
        Material Dashboard
      </h1>
      <ul className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 mt-4">
        {sidebarItems.map((item) => (
          <li key={item.to} className="flex justify-center mb-4">
            <Link
              to={item.to}
              className={`flex items-center w-full p-2 rounded-md gap-4 ${
                activeLink === item.to ? "bg-blue-200" : "hover:bg-gray-300"
              }`}
              onClick={() => setActiveLink(item.to)}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="text-base">{item.name}</span>
            </Link>
          </li>
        ))}
        <li className="flex justify-center">
          <button
            className={`flex items-center w-full p-2 rounded-md gap-4 ${
              show ? "bg-blue-200" : "hover:bg-gray-300"
            }`}
            onClick={() => setShow(!show)}
          >
            <CiCircleMore className="text-xl" /> More
          </button>
        </li>
        {show &&
          moreItems.map((item) => (
            <li key={item.to} className="flex justify-center">
              <Link
                to={item.to}
                className={`flex items-center w-full p-2 rounded-md gap-4 ${
                  activeLink === item.to
                    ? "bg-blue-200 text-white"
                    : "hover:bg-gray-300"
                }`}
                onClick={() => setActiveLink(item.to)}
              >
                <span className="text-xl">{item.icon}</span>
                <span className="text-base">{item.name}</span>
              </Link>
            </li>
          ))}
        <div className="flex items-center justify-center pt-4 font-semibold">
          <h3 className="mb-4 mt-4">ACCOUNT PAGES</h3>
        </div>
        {accountItems.map((item) => (
          <li key={item.to} className="flex justify-center">
            <Link
              to={item.to}
              className={`flex items-center w-full p-2 rounded-md gap-4 ${
                activeLink === item.to
                  ? "bg-blue-200 text-white"
                  : "hover:bg-gray-300"
              }`}
              onClick={() => setActiveLink(item.to)}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="text-base">{item.name}</span>
            </Link>
          </li>
        ))}
        <div className="mt-12">
          <button className="bg-orange-400 flex justify-center items-center rounded-md w-full h-12">
            DOCS
          </button>
        </div>
      </ul>
    </div>
  );
}

export default SideBar;
