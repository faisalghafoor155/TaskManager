/** @format */

import { Outlet, Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaCheckDouble, FaInbox } from "react-icons/fa";
import { IoFilterOutline } from "react-icons/io5";
import { RiListSettingsLine } from "react-icons/ri";
import NavList from "./NavList"; // Import the child component

function Inbox() {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState(location.pathname);

  useEffect(() => {
    setActiveItem(location.pathname);
  }, [location.pathname]);

  const navData = [
    { label: "Inbox", link: "/inbox", icon: <FaInbox /> },
    { label: "Important", link: "/inbox/important" },
    { label: "Other", link: "/inbox/other" },
    { label: "Snoozed", link: "/inbox/snoozed" },
    { label: "Cleared", link: "/inbox/cleared" },
  ];

  return (
    <div className="w-full bg-white flex flex-col p-2">
      <nav className="flex justify-between items-center border-b-2">
        <NavList navData={navData} activeItem={activeItem} />
        <div className="flex gap-8 text-gray-700 text-sm">
          <span className="flex items-center gap-2">
            <IoFilterOutline />
            Filter
          </span>
          <span className="flex items-center gap-2">
            <FaCheckDouble className="text-gray-300" />
            Cleared all
          </span>
          <span className="flex items-center gap-2">
            <RiListSettingsLine />
            Customize
          </span>
        </div>
      </nav>

      <div className="flex justify-center items-center gap-4 mt-4">
        <Outlet />
      </div>
    </div>
  );
}

export default Inbox;
