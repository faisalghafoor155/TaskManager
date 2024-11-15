/** @format */

import React from "react";
import { FaUsers } from "react-icons/fa";
import { IoIosNotificationsOutline, IoMdNotifications } from "react-icons/io";
import { IoPersonSharp } from "react-icons/io5";

function ChatSidebar() {
  return (
    <div className="flex flex-col">
      <button className="p-2 rounded-lg hover:bg-white">
        <IoMdNotifications
          className=" fill-white hover:fill-[#1D2549]"
          size={25}
        />
      </button>
      <button className="p-2 rounded-lg hover:bg-white">
        <FaUsers className=" fill-white hover:fill-[#1D2549]" size={25} />
      </button>
      <button></button>
    </div>
  );
}

export default ChatSidebar;
