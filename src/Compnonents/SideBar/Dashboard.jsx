/** @format */

import { FaPlus, FaSignal } from "react-icons/fa";
import NavList from "../Inbox/NavList";
import dashboard1 from "../../../public/Assets/dashboard1.svg";
import dashboard2 from "../../../public/Assets/dashboard2.svg";
import dashboard3 from "../../../public/Assets/dashboard3.svg";
import dashboard4 from "../../../public/Assets/dashboard4.svg";
import dashboard5 from "../../../public/Assets/dashboard5.svg";

const navDash = [
  { label: "Dashboard", link: "/dashboard", icon: <FaSignal /> },
];

// eslint-disable-next-line react/prop-types
const DashBoardCard = ({ img, title, para }) => {
  return (
    <div className="w-1/4 h-full  p-4 border rounded-md hover:bg-gray-100 shadow-sm">
      <span>{img}</span>
      <h1 className="font-semibold mt-2 text-gray-800">{title}</h1>
      <p className="text-gray-500 text-sm mt-2">{para}</p>
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const Dashboard = ({ navData = navDash, activeItem }) => {
  return (
    <div className="w-full bg-white flex flex-col ">
      <nav className="flex justify-between items-center border-b-2 border-b-gray-100 ">
        <NavList navData={navData} activeItem={activeItem} />
        <div className="flex items-center p-2 gap-4">
          <input
            type="text"
            className="border rounded px-2 p-2 w-1/2 hover:bg-gray-300"
            placeholder="Search..."
          />
          <button className="bg-blue-400 p-2 border rounded-lg">
            New Dashboard
          </button>
        </div>
      </nav>
      <div className="mt-16 p-8 text-center">
        <h1 className="flex justify-center font-bold text-xl text-gray-900">
          Choose a Dashboard template
        </h1>
        <p className="flex justify-center mt-4 text-sm text-gray-500 text-center">
          Get started with a Dashboard template or crate a custom Dashboard to
          fit your <br /> exact needs.
        </p>
      </div>
      <div className="flex gap-3 items-center justify-center">
        <DashBoardCard
          img={<img src={dashboard1} alt="dashboard1" />}
          title="Simple Dashboard"
          para="Easily maange and priotize daily tasks."
        />
        <DashBoardCard
          img={<img src={dashboard2} alt="dashboard2" />}
          title="Team Reporting"
          para="Enourage collaboration by viewing progress across team."
        />
        <DashBoardCard
          img={<img src={dashboard3} alt="dashboard3" />}
          title="Time Tracking"
          para="View and report on time tracking metrics."
        />
      </div>

      <div className="flex gap-3 items-center justify-center mt-4">
        <DashBoardCard
          img={<img src={dashboard4} alt="dashboard4" />}
          title="Project Management"
          para="Deep-dive on detailed projects from a central place."
        />
        <DashBoardCard
          img={<img src={dashboard5} alt="dashboard5" />}
          title="Client Portal"
          para="Chat and collaborate with clients on tasks and projects."
        />

        <DashBoardCard
          className="bg-gray-300"
          img={
            <div className="flex justify-center mt-4">
              <button className="text-center p-2 bg-gray-600 border rounded-lg">
                <FaPlus />
              </button>
            </div>
          }
          title={
            <h1 className="text-gray-500 flex justify-center">
              Start from Scratch
            </h1>
          }
        />
      </div>
    </div>
  );
};

export default Dashboard;
