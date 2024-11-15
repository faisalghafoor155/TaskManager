/** @format */

import React from "react";
import moment from "moment";
import UseAvatar from "../Compnonents/UserAvatar"; // Adjust the path if necessary

const Message = ({ text, sender, timestamp }) => {
  const isUser = sender === "user";

  return (
    <div
      className={`flex ${
        isUser ? "justify-end" : "justify-start"
      } gap-2 items-center my-2 hover:animation-fadeIn`}
    >
      {!isUser && (
        <button className="rounded-full bg-blue-500 p-1 text-white">FG</button>
      )}
      <div
        className={`max-w-xs p-2 bg-white text-gray-700 rounded-2xl rounded-tl-none shadow-md ${
          isUser ? "bg-white text-gray-700" : "bg-gray-100 text-gray-800"
        }`}
      >
        <p className="text-sm">{text}</p>
        <span className="text-xs text-gray-400 float-right mt-1">
          {moment(timestamp).format("h:mm A")}
        </span>
      </div>
      {isUser && (
        <button className="rounded-full bg-blue-500 p-3 text-white">FA</button>
      )}
    </div>
  );
};

export default Message;
