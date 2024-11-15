/** @format */

import React, { useState } from "react";
import { IoMdSend } from "react-icons/io";

const InputArea = ({ onSend }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSend = () => {
    if (inputValue.trim()) {
      onSend(inputValue);
      setInputValue("");
    }
  };

  const handleKey = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex items-center w-full rounded-lg p-4 border-t bg-white h-[6%]">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={handleKey}
        placeholder="Type a message..."
        className="flex-1 border-none rounded-lg outline-none"
      />
      <span
        onClick={handleSend}
        className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600"
      >
        <IoMdSend />
      </span>
    </div>
  );
};

export default InputArea;
