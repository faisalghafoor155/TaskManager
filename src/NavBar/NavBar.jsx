/** @format */

// NavBar.js
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import { CiCirclePlus } from "react-icons/ci";
import { GrStatusGood } from "react-icons/gr";
import { SlCamrecorder } from "react-icons/sl";
import { PiNoteDuotone } from "react-icons/pi";
import { IoIosNotificationsOutline } from "react-icons/io";
import NotificationPanel from "../Compnonents/NotificationPanel";
import { UserAvatar } from "../Compnonents";

function NavBar() {
  // const [notificationPanelOpen, setNotificationPanelOpen] = useState(false);
  // const navigate = useNavigate();

  return (
    <div
      className="bg-[#1D2549]
 flex justify-between shadow-md items-center w-full h-16 p-7 text-gray-900 font-sans font-medium"
    >
      <Logo />
      <div>
        <ul className="flex items-center gap-4">
          <li>
            <Link to="">
              <button className="hover:bg-gray-800 p-3 rounded-md text-white ">
                <span className="flex items-center gap-2">
                  <CiCirclePlus className="text-white" size={18} />
                  New
                </span>
              </button>
            </Link>
          </li>
          <li>
            <Link to="">
              <button className="hover:bg-gray-800 p-3 rounded-md text-white ">
                <GrStatusGood size={18} className="text-white" />
              </button>
            </Link>
          </li>
          <li>
            <Link to="">
              <button className="hover:bg-gray-800 p-3 rounded-md text-white ">
                <SlCamrecorder size={18} className="text-white" />
              </button>
            </Link>
          </li>
          <li>
            <Link to="">
              <button className="hover:bg-gray-800 p-3 rounded-md text-white ">
                <PiNoteDuotone size={18} />
              </button>
            </Link>
          </li>

          <div className="flex gap-2 items-center">
            <NotificationPanel className="bg-white" />

            {/* <UserAvatar /> */}
          </div>
          {/* <NotificationPanel /> */}

          <UserAvatar />
        </ul>
      </div>
    </div>
  );
}

export default NavBar;

{
  /* <li className="relative">
            <div
              onClick={toggleDropdown}
              className="w-10 h-10 bg-blue-400 right-4 mt-2  cursor-pointer flex items-center justify-center rounded-full"
            >
              <UserInfo user={{ name: "Faisal" }} />
            </div>

            {dropdownOpen && (
              <div className="absolute right-2 mt-2 w-48 bg-white rounded-lg shadow-lg">
                <ul className="text-gray-800">
                  <li>
                    <button
                      onClick={() => handleNavigation("/login")}
                      className="block px-4 py-2 hover:bg-gray-200 w-full text-left"
                    >
                      Logout
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleNavigation("/register")}
                      className="block px-4 py-2 hover:bg-gray-200 w-full text-left"
                    >
                      Register
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </li> */
}
