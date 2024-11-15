/** @format */
import React from "react";
import empty from "../../../public/Assets/empty.440dcc90abaf2d659d5a27aea65f9efa.svg";
function Goal() {
  return (
    <div className="w-full h-full bg-gray-100 flex flex-col items-center ">
      <div className="text-center p-4 mt-12 ">
        <h1 className=" text-gray-700 ">Make your goals a reality.</h1>
        <p className="text-sm text-gray-400 mt-2">
          Create Goals, break them down into measurable target, and track
          progress in real-time
        </p>
      </div>
      <img src={empty} alt="empty" className="w-[70%] h-auto" />
      <button className="mt-4 borader rounded-sm p-2 bg-blue-400 text-white text-sm font-semibold">
        Set a Goal
      </button>
    </div>
  );
}

export default Goal;
