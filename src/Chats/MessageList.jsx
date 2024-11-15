/** @format */

import React from "react";
import Message from "./Message";

const MessageList = ({ messages }) => {
  return (
    <div className="flex flex-col overflow-y-scroll h-[88%] p-6 ">
      {messages.map((message) => (
        <Message
          key={message.id}
          text={message.text}
          sender={message.sender}
          timestamp={message.timestamp}
        />
      ))}
    </div>
  );
};

export default MessageList;
