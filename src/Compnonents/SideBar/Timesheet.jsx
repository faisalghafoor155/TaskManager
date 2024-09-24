/** @format */

import { RiTimerLine } from "react-icons/ri";
import NavList from "../Inbox/NavList";
import { IoSettingsOutline } from "react-icons/io5";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { useState } from "react";
import { addDays, format, subDays } from "date-fns";
import DatePicker from "react-datepicker";

const timeCard = [
  { label: "Timesheet", link: "/", icon: <RiTimerLine /> },
  { label: "My Timesheet", link: "/time" },
  { label: "All timesheet", link: "/time" },
];

// eslint-disable-next-line react/prop-types
function Timesheet({ navData = timeCard, activeItem }) {
  const [startDate, setStartDate] = useState(new Date());

  const handleStartDate = () => {
    setStartDate(addDays(startDate, 1));
  };
  const handleNextDate = () => {
    setStartDate(subDays(startDate, 1));
  };
  const customDatePicker = (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      dateFormat="d-MMM-EEE"
      customInput={
        <div className="date-display">{format(startDate, "d-MMM-EEE")}</div>
      }
    />
  );
  return (
    <div className="w-full bg-white flex flex-col  p-2">
      <nav className="flex justify-between items-center border-b-2">
        <NavList navData={navData} activeItem={activeItem} />
        <div className="flex items-center p-1 gap-4">
          <button className="bg-gray-300 p-3 border rounded-lg">
            <span className="flex items-center gap-2">
              <IoSettingsOutline />
              Configure
            </span>
          </button>
        </div>
      </nav>
      <div className="p-6 flex">
        <span className="flex gap-2">
          <button onClick={handleNextDate}>
            <GrFormPrevious size={25} />
          </button>
          <button onClick={handleStartDate}>
            <GrFormNext size={25} />
          </button>
        </span>
        <div className="flex gap-4 items-center">{customDatePicker}</div>
      </div>
    </div>
  );
}

export default Timesheet;
