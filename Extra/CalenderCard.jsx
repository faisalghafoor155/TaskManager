/** @format */

// /** @format */

import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format, addDays, subDays } from "date-fns";
import { IoAppsOutline } from "react-icons/io5";
import { BsPlus, BsThreeDots } from "react-icons/bs";
import { MdCloseFullscreen, MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { SlCalender } from "react-icons/sl";
import MainPage from "../Compnonents/AppCenter/MainPage";
import { IoMdClose } from "react-icons/io";

function CalenderCard() {
  const [startDate, setStartDate] = useState(new Date());
  const [isMainPageOpen, setIsMainPageOpen] = useState(false);

  const formatDate = (date) => {
    return format(date, "d MMMM EEE");
  };

  const handleNextDay = () => {
    setStartDate(addDays(startDate, 1));
  };

  const handlePreviousDay = () => {
    setStartDate(subDays(startDate, 1));
  };

  const handleButtonClick = () => {
    setIsMainPageOpen(true);
  };

  const handleCloseMainPage = () => {
    setIsMainPageOpen(false);
  };

  return (
    <div className="w-full mt-8 h-72 border rounded-lg shadow-md bg-gray-100 p-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center group text-gray-500 font-bold">
          <span className="flex gap-2 justify-center items-center">
            <IoAppsOutline className="opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <h1>Assigned to me</h1>
          </span>
        </div>
        <div className="flex gap-3 group ">
          <BsPlus className="opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <MdCloseFullscreen className="opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <BsThreeDots className="opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
      </div>
      <div className="flex items-center gap-8 p-2 mt-4 border-b-2 text-gray-600 ">
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          dateFormat="d MMMM EEE"
          customInput={
            <div className="date-display">{formatDate(startDate)}</div>
          }
        />
        <div className="flex gap-4">
          <button onClick={handlePreviousDay}>
            <GrFormPrevious />
          </button>
          <button onClick={handleNextDay}>
            <MdOutlineNavigateNext />
          </button>
        </div>
        <h4>Today</h4>
      </div>
      <div className="flex flex-col justify-center items-center mt-16 p-4">
        <SlCalender className="mb-2" />
        <p className="mb-2">Agenda items from your calendars will show here.</p>
        <button
          onClick={handleButtonClick}
          className="bg-blue-400 p-2 border rounded-md"
        >
          Add calendar integrations
        </button>
      </div>

      {isMainPageOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50 ">
          <div className="w-3/4 h-3/4 bg-white shadow-lg rounded-lg overflow-auto relative">
            <MainPage />
            <button
              onClick={handleCloseMainPage}
              className="absolute top-4 right-4  text-gray-600 "
            >
              <IoMdClose />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CalenderCard;
