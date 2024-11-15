/** @format */
/** @format */

import { LiaCommentsSolid } from "react-icons/lia";
import { TiTickOutline } from "react-icons/ti";
import CardsComponents from "../DashBoard/CardsComponents";
import { BsPlus } from "react-icons/bs";
// import Task from "../DashBoard/Task";
import { SlCalender } from "react-icons/sl";
import { useState } from "react";
import { addDays, format, subDays } from "date-fns";
import DatePicker from "react-datepicker";
import { GrFormPrevious } from "react-icons/gr";
import { MdOutlineNavigateNext } from "react-icons/md";
import AllApp from "../AppCenter/AllApp"; // Import AllApp component
import SideBar from "../AppCenter/SideBar";
// import TaskList from "../../features/TaskList";

function Home() {
  const [startDate, setStartDate] = useState(new Date());
  const [showModal, setShowModal] = useState(false);
  const [activeSection, setActiveSection] = useState("/all-apps");
  const handleNextDay = () => {
    setStartDate(addDays(startDate, 1));
  };

  const handlePreviousDay = () => {
    setStartDate(subDays(startDate, 1));
  };

  const handleToggleModal = () => {
    setShowModal((prev) => !prev);
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
    <div className="flex h-auto bg-white w-full">
      <div className="flex-1 p-4 w-full">
        <div className="flex gap-4 ">
          <CardsComponents
            width="w-[75%]"
            height="h-auto"
            title="Assigne"
            heading="No Comments"
            paragh="You don't have any assigned comments"
            icon={<LiaCommentsSolid size={50} className="text-gray-400" />}
          />
          <CardsComponents
            width="w-auto"
            height={70}
            title="LineUp"
            icon2={<TiTickOutline size={50} className="text-gray-400" />}
            paragh="LineUp keeps your most important tasks in one list. Add your most important task to get started"
            btn={
              <button className="flex items-center bg-blue-400 border rounded-md p-1 mt-4 text-white">
                <BsPlus size={20} /> Add task
              </button>
            }
          />
        </div>

        {/* <TaskList /> */}
        <div className="flex gap-4">
          <CardsComponents
            width="w-[80%]"
            height="h-auto"
            title="Assigned to me"
            heading="No Comments"
            paragh="You don't have any assigned comments"
            icon={<LiaCommentsSolid size={50} className="text-gray-400" />}
          />
          <CardsComponents
            width="w-[75%]"
            height="h-auto"
            title="Agenda"
            btn2={
              <div className="flex gap-4 items-center">
                <button onClick={handlePreviousDay}>
                  <GrFormPrevious size={20} />
                </button>
                {customDatePicker}
                <button onClick={handleNextDay}>
                  <MdOutlineNavigateNext size={20} />
                </button>
              </div>
            }
            icon2={<SlCalender size={40} className="text-gray-400" />}
            heading="Agenda calendar"
            paragh="Agenda items from your calendars will show here"
            btn={
              <button
                className="flex items-center bg-blue-400 border rounded-md p-1 mt-4 text-sm text-white"
                onClick={handleToggleModal}
              >
                <BsPlus size={20} /> Add calendar integrations
              </button>
            }
          />
        </div>

        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 mt-2">
            <div className="bg-white w-[80%] h-[80%] max-w-[1200px] max-h-[800px] rounded-lg  relative overflow-hidden">
              <button
                className="absolute  right-2 text-xl p-5"
                onClick={handleToggleModal}
              >
                &times;
              </button>
              <div className="flex w-full h-full">
                <SideBar onSelect={setActiveSection} />
                <div className="overflow-auto w-full">
                  <AllApp activeSection={activeSection} />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
