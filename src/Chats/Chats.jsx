/** @format */

import React, { useState, useEffect, useRef } from "react";
import MessageList from "./MessageList";
import Input from "./Input";
import { IoIosVideocam } from "react-icons/io";
import { MdCloseFullscreen, MdFullscreen } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import ChatSidebar from "./ChatSidebar";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [clear, setClear] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const chatRef = useRef(null);
  useEffect(() => {
    const storedMessages = localStorage.getItem("chatMessages");
    if (storedMessages) {
      setMessages(JSON.parse(storedMessages));
    } else {
      setMessages([
        {
          id: 1,
          text: "Welcome to Tasklytics Chats",
          sender: "user",
          timestamp: new Date(),
        },
      ]);
    }
  }, []);

  const addMessage = (text) => {
    const newMessage = {
      id: messages.length + 1,
      text,
      sender: "me",
      timestamp: new Date(),
    };
    const updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages);
    localStorage.setItem("chatMessages", JSON.stringify(updatedMessages));
  };

  const clearChat = () => {
    setMessages([]);
    localStorage.removeItem("chatMessages");
    setClear(false);
  };
  const screenHandle = () => {
    if (!isFullScreen) {
      chatRef.current?.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
    setIsFullScreen(!isFullScreen);
  };

  return (
    <div className="bg-gray-500">
      <ChatSidebar />
    </div>
    //     <div
    //       ref={chatRef}
    //       className="flex flex-col h-auto sm:h-screen bg-gray-100 shadow-lg rounded-lg overflow-hidden"
    //     >
    //       <div
    //         className="bg-[#1D2549]
    // flex justify-between items-center p-4 sm:p-4 lg:p-2"
    //       >
    //         <h1 className="text-white text-lg sm:text-xl lg:text-2xl ml-4 sm:ml-8">
    //           Tasklytics Chats
    //         </h1>

    //         <span className="flex gap-3 sm:gap-4 mr-4 sm:mr-8 items-center">
    //           <IoIosVideocam className="text-white text-xl sm:text-2xl lg:text-3xl" />

    //           {isFullScreen ? (
    //             <MdCloseFullscreen
    //               onClick={screenHandle}
    //               className="text-white cursor-pointer text-xl sm:text-2xl lg:text-3xl"
    //             />
    //           ) : (
    //             <MdFullscreen
    //               onClick={screenHandle}
    //               className="text-white cursor-pointer text-xl sm:text-2xl lg:text-3xl"
    //             />
    //           )}

    //           <div className="relative">
    //             <BsThreeDotsVertical
    //               className="text-white cursor-pointer text-xl sm:text-2xl"
    //               onClick={() => setClear(!clear)}
    //             />
    //             {clear && (
    //               <div className="absolute right-0 mt-2 w-24 sm:w-32 bg-white shadow-md rounded-md z-10">
    //                 <button
    //                   onClick={clearChat}
    //                   className="w-full text-left px-3 sm:px-4 py-2 text-gray-700 hover:bg-gray-200"
    //                 >
    //                   Clear
    //                 </button>
    //               </div>
    //             )}
    //           </div>
    //         </span>
    //       </div>

    //       <div className="flex-1 flex flex-col h-[90vh] p-0 sm:p-0 lg:p-0 overflow-hidden">
    //         <MessageList messages={messages} />
    //         <Input onSend={addMessage} />
    //       </div>
    // </div>
  );
};

export default Chat;
