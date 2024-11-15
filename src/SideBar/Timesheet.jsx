/** @format */

import { RiTimerLine } from "react-icons/ri";
import NavList from "../Inbox/NavList";
import { IoSettingsOutline } from "react-icons/io5";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { useState } from "react";
import { addDays, endOfWeek, format, startOfWeek, subDays } from "date-fns";
import { CgDollar } from "react-icons/cg";
import { GoTag } from "react-icons/go";
import { IoIosArrowDropdown, IoMdTime } from "react-icons/io";
// import Task from "../DashBoard/Task";
import DatePicker from "react-datepicker"; // Ensure you have react-datepicker installed
import "react-datepicker/dist/react-datepicker.css"; // Import the styles
// import TaskList from "../../features/TaskList";

const timeCard = [
  { label: "Timesheet", link: "/", icon: <RiTimerLine /> },
  { label: "My Timesheet", link: "/time" },
  { label: "All timesheet", link: "/time" },
];

// eslint-disable-next-line react/prop-types
function Timesheet({ navData = timeCard, activeItem }) {
  const [startDate, setStartDate] = useState(new Date());
  const [calender, setCalender] = useState(false);

  const handlePrevWeek = () => {
    setStartDate(subDays(startDate, 7));
  };

  const handleNextWeek = () => {
    setStartDate(addDays(startDate, 7));
  };

  const startOfWeek1 = startOfWeek(startDate, { weekStartsOn: 1 });
  const endOfWeek1 = endOfWeek(startDate, { weekStartsOn: 1 });

  const weekDays = Array.from({ length: 7 }).map((_, index) => {
    const day = addDays(startOfWeek1, index);
    return format(day, "d-MMM-EEE");
  });

  const handleToggle = () => {
    setCalender(!calender);
  };

  return (
    <div className="w-full bg-white flex flex-col p-2">
      <nav className="flex justify-between items-center border-b-2">
        <NavList navData={navData} activeItem={activeItem} />
        <div className="flex items-center p-1 gap-4 mr-8">
          <button className="bg-gray-300 p-3 border rounded-lg">
            <span className="flex items-center gap-2">
              <IoSettingsOutline />
              Configure
            </span>
          </button>
        </div>
      </nav>

      <div className="p-4 flex justify-between items-center mt-8">
        <button onClick={handlePrevWeek}>
          <GrFormPrevious size={25} />
        </button>
        <div className="relative flex items-center gap-4">
          <h1 className="text-xl font-semibold">
            {format(startOfWeek1, "d MMM-yy")} to{" "}
            {format(endOfWeek1, "d MMM-yy")}
          </h1>
          <div className="relative">
            <IoIosArrowDropdown
              onClick={handleToggle}
              className="cursor-pointer"
            />
            {calender && (
              <div className="absolute mt-4 flex items-center bg-white border border-gray-300 rounded-md shadow-lg z-50">
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  inline
                />
              </div>
            )}
          </div>
        </div>

        <button onClick={handleNextWeek}>
          <GrFormNext size={25} />
        </button>
      </div>

      <div className="p-4 flex gap-2">
        <button className="hover:bg-gray-200 border rounded-2xl px-2 py-1 text-center">
          <span className="flex items-center text-gray-500 text-sm gap-1 font-semibold">
            <CgDollar />
            Billing
          </span>
        </button>
        <button className="hover:bg-gray-200 border rounded-2xl px-2 py-1 text-center">
          <span className="flex items-center text-gray-500 text-sm gap-1 font-semibold">
            <GoTag />
            Tag
          </span>
        </button>
        <button className="hover:bg-gray-200 border rounded-2xl px-2 py-1 text-center">
          <span className="flex items-center text-gray-500 text-sm gap-1 font-semibold">
            <IoMdTime />
            Tracked time
          </span>
        </button>
      </div>

      <div className="w-full h-full border rounded-lg text-gray-500">
        <div className="flex items-center gap-16 border-b-2 gray-200 text-sm">
          <h4 className="p-4 text-sm">Task/Location</h4>
          {weekDays.map((day, index) => (
            <button
              key={index}
              className={`text-sm border w-full ${
                format(startDate, "d-MMM-EEE") === day
                  ? "bg-gray-300"
                  : "hover:bg-gray-300"
              }`}
            >
              {day}
            </button>
          ))}
        </div>
        <div className="w-full flex items-center justify-center p-4">
          {/* <TaskList /> */}
        </div>
      </div>
    </div>
  );
}

export default Timesheet;
