/** @format */

import { useState } from "react";
import { CiCloud, CiHeart } from "react-icons/ci";
import { FiMessageCircle } from "react-icons/fi";
import { IoAppsOutline } from "react-icons/io5";
import {
  MdAccessTime,
  MdDeveloperBoard,
  MdEmail,
  MdSearch,
} from "react-icons/md";
import { SiCivicrm } from "react-icons/si";
import { SlCalender } from "react-icons/sl";
import logo from "../../../public/Assets/comrex_logo.svg";

// eslint-disable-next-line react/prop-types
function SideBar({ onSelect }) {
  const [isActive, setIsActive] = useState("/all-apps");

  const appCenter = [
    { id: 1, icon: <IoAppsOutline />, to: "/Allapp", name: "All Apps" },
    { id: 2, icon: <CiHeart />, to: "/Featured", name: "Featured" },
    { id: 3, icon: <SlCalender />, to: "/Calendar", name: "Calendar" },
    { id: 4, icon: <CiCloud />, to: "/Cloud", name: "Cloud" },
    {
      id: 5,
      icon: <FiMessageCircle />,
      to: "/Communication",
      name: "Communication",
    },
    {
      id: 6,
      icon: <MdSearch />,
      to: "/Connected",
      name: "Connected Search",
    },
    { id: 7, icon: <SiCivicrm />, to: "/CRM", name: "CRM" },
    {
      id: 8,
      icon: <MdDeveloperBoard />,
      to: "/Development",
      name: "Development",
    },
    { id: 9, icon: <MdEmail />, to: "/Email", name: "Email" },
    { id: 10, icon: <MdAccessTime />, to: "/TimeTracking", name: "Time" },
  ];

  return (
    <div className="w-2/6 h-full bg-gray-100 border rounded-lg shadow-md p-2">
      <aside className="p-2 h-full flex flex-col sticky top-0">
        <div className="flex items-center gap-4 mb-4 text-lg font-bold">
          <img src={logo} alt="logo" width={60} />
          <span>App Center</span>
        </div>
        {appCenter.map((app) => (
          <div
            key={app.id}
            className={`flex items-center p-1 rounded-lg cursor-pointer w-full mt-2 ${
              isActive === app.to
                ? "bg-blue-100 text-blue-500"
                : "text-gray-700 hover:bg-gray-200"
            }`}
            onClick={() => {
              setIsActive(app.to);
              onSelect(app.to);
            }}
          >
            <span className="mr-3">{app.icon}</span>
            <span>{app.name}</span>
          </div>
        ))}
      </aside>
    </div>
  );
}

export default SideBar;
