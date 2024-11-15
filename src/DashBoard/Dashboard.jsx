/** @format */

import { FaNewspaper, FaPlus, FaSignal } from "react-icons/fa";
import NavList from "../Inbox/NavList";
import moment from "moment";
import dashboard1 from "../../public/Assets/dashboard1.svg";
import dashboard2 from "../../public/Assets/dashboard2.svg";
import dashboard3 from "../../public/Assets/dashboard3.svg";
import dashboard4 from "../../public/Assets/dashboard4.svg";
import dashboard5 from "../../public/Assets/dashboard5.svg";
import { VictoryPie, VictoryChart, VictoryBar } from "victory";
import {
  MdAdminPanelSettings,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdKeyboardDoubleArrowUp,
} from "react-icons/md";
import { LuClipboardEdit } from "react-icons/lu";
import { FaArrowsToDot } from "react-icons/fa6";
import { useEffect } from "react";
import { useGetDasboardStatsQuery } from "../redux/slices/api/taskApiSlice";
import { useSelector } from "react-redux";
import { Loading, UserInfo } from "../Compnonents";
import Chart from "../Compnonents/Chart";
import clsx from "clsx";
import { BGS, getInitials, PRIOTITYSTYELS, TASK_TYPE } from "../utils";
import RadialBar from "../Compnonents/RaidalBar";
import PieChart from "../Compnonents/PieCharts";
import PieCharts from "../Compnonents/PieCharts";

const navDash = [
  { label: "Dashboard", link: "/dashboard", icon: <FaSignal /> },
];
const Card = ({ label, count, bg, icon }) => {
  return (
    <div className="flex justify-between items-center w-full h-full p-6 border rounded-lg hover:shadow-lg transition-shadow bg-white">
      <div className="flex flex-col space-y-1">
        <p className="text-gray-400 text-sm font-medium">{label}</p>
        <span className="text-2xl font-extrabold text-gray-800">{count}</span>
      </div>
      <div
        className={clsx(
          "w-12 h-12 rounded-full flex items-center justify-center text-white shadow-md transition-transform transform hover:scale-110",
          bg,
        )}
      >
        {icon}
      </div>
    </div>
  );
};

// eslint-disable-next-line react/prop-types
// eslint-disable-next-line react/prop-types

const UserTable = ({ users }) => {
  const TableHeader = () => (
    <thead className="border-b border-gray-300 dark:border-gray-600 ">
      <tr className="text-black dark:text-white  text-left h-500 ">
        <th className="py-2">Full Name</th>
        <th className="py-2">Status</th>
        <th className="py-2">Created At</th>
      </tr>
    </thead>
  );

  const TableRow = ({ user }) => (
    <tr className="border-b border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-400/10  h-1/5">
      <td className="py-2 ">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full text-white flex items-center justify-center text-sm bg-violet-700">
            <span className="text-center">{getInitials(user?.name)}</span>
          </div>
          <div>
            <p> {user.name}</p>
            <span className="text-xs text-black">{user?.role}</span>
          </div>
        </div>
      </td>

      <td>
        <p
          className={clsx(
            "w-fit px-3 py-1 rounded-full text-sm",
            user?.isActive ? "bg-blue-200" : "bg-yellow-100",
          )}
        >
          {user?.isActive ? "Active" : "Disabled"}
        </p>
      </td>
      <td className="py-2 text-sm">{moment(user?.createdAt).fromNow()}</td>
    </tr>
  );

  return (
    <div className="w-full md:w-1/3 bg-white h-fit px-2 md:px-6 py-4 shadow-md rounded ">
      <table className="w-full mb-5">
        <TableHeader />
        <tbody>
          {users?.map((user, index) => (
            <TableRow key={index + user?._id} user={user} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

const TaskTable = ({ tasks }) => {
  const { user } = useSelector((state) => state.auth);

  const ICONS = {
    high: <MdKeyboardDoubleArrowUp />,
    medium: <MdKeyboardArrowUp />,
    low: <MdKeyboardArrowDown />,
  };

  const TableHeader = () => (
    <thead className="border-b-2 border-gray-300 dark:border-gray-600 ">
      <tr className="text-black dark:text-white  text-left">
        <th className="py-2">Task Title</th>
        <th className="py-2">Priority</th>
        <th className="py-2">Team</th>
        <th className="py-2 hidden md:block">Created At</th>
      </tr>
    </thead>
  );

  const TableRow = ({ task }) => (
    <tr className="border-b-2 border-gray-200 text-gray-600 hover:bg-gray-300/10   ">
      <td className="py-4">
        <div className="flex items-center gap-2">
          <div
            className={clsx("w-4 h-4 rounded-full", TASK_TYPE[task.stage])}
          />
          <p className="text-base text-black dark:text-gray-400">
            {task?.title}
          </p>
        </div>
      </td>
      <td className="p-2">
        <div className={"flex gap-1"}>
          <span className={clsx("text-lg", PRIOTITYSTYELS[task?.priority])}>
            {ICONS[task?.priority]}
          </span>
          <span className="capitalize">{task?.priority}</span>
        </div>
      </td>

      <td className="py-2 ">
        <div className="flex ">
          {task?.team.map((m, index) => (
            <div
              key={index}
              className={clsx(
                "w-7 h-7 rounded-full text-white flex items-center justify-center text-sm -mr-1",
                BGS[index % BGS?.length],
              )}
            >
              <UserInfo user={m} />
            </div>
          ))}
        </div>
      </td>

      <td className="py-2 hidden md:block ">
        <span className="text-base text-gray-600">
          {moment(task?.date).fromNow()}
        </span>
      </td>
    </tr>
  );

  return (
    <>
      <div
        className={clsx(
          "w-full bg-white dark:bg-[#1f1f1f] px-2 md:px-4 pt-4 pb-4 shadow-md rounded ",
          user?.isAdmin ? "md:w-2/3" : "",
        )}
      >
        <table className="w-full ">
          <TableHeader />
          <tbody className="">
            {tasks.map((task, id) => (
              <TableRow key={task?._id + id} task={task} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

// eslint-disable-next-line react/prop-types
const Dashboard = ({ navData = navDash, activeItem }) => {
  const { data, isLoading, error } = useGetDasboardStatsQuery();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const totals = data?.tasks || [];

  if (isLoading)
    return (
      <div className="py-10">
        <Loading />
      </div>
    );

  const stats = [
    {
      _id: "1",
      label: "TOTAL TASK",
      total: data?.totalTasks || 0,
      icon: <FaNewspaper />,
      bg: "bg-[#1d4ed8]",
    },
    {
      _id: "2",
      label: "COMPLTED TASK",
      total: totals["completed"] || 0,
      icon: <MdAdminPanelSettings />,
      bg: "bg-[#0f766e]",
    },
    {
      _id: "3",
      label: "TASK IN PROGRESS ",
      total: totals["in progress"] || 0,
      icon: <LuClipboardEdit />,
      bg: "bg-[#f59e0b]",
    },
    {
      _id: "4",
      label: "TODOS",
      total: totals["todo"],
      icon: <FaArrowsToDot />,
      bg: "bg-[#be185d]" || 0,
    },
  ];
  return (
    <div className="w-full bg-gray-100 flex flex-col p-4 ">
      <nav className="flex justify-between items-center border-b-2 border-b-gray-100 border-b-gr">
        <NavList navData={navData} activeItem={activeItem} />
        <div className="flex items-center p-2 gap-4">
          <input
            type="text"
            className="border rounded px-2 p-1 w-1/2 hover:bg-gray-300 "
            placeholder="Search..."
          />
          <button className="bg-blue-400 p-1 text-white border rounded-lg">
            Dashboard
          </button>
        </div>
      </nav>
      {/* <div className="mt-16 p-8 text-center">
        <h1 className="flex justify-center font-bold text-xl text-gray-900">
          Choose a Dashboard template
        </h1>
        <p className="flex justify-center mt-4 text-sm text-gray-500 text-center">
          Get started with a Dashboard template or crate a custom Dashboard to
          fit your <br /> exact needs.
        </p>
      </div> */}

      <div className="h-full py-4 mt-8">
        <>
          <div className="grid grid-cols-1 md:grid-cols-4  gap-6">
            {stats?.map(({ icon, bg, label, total }, index) => (
              <Card
                key={index}
                icon={icon}
                bg={bg}
                label={label}
                count={total}
              />
            ))}
          </div>

          <div className="w-full  bg-white my-16 p-4 rounded shadow-sm">
            <h4 className="text-xl text-gray-500 font-bold mb-2">
              Chart by Priority
            </h4>

            <div className="flex gap-4 justify-around">
              {data?.graphData ? (
                <Chart data={data?.graphData} width={400} height={300} />
              ) : (
                <p>Loading chart data...</p>
              )}
              {data?.graphData ? (
                <PieCharts data={data?.graphData} width={400} height={300} />
              ) : (
                <p>Loading chart data...</p>
              )}
            </div>
          </div>

          <div className="w-full flex flex-col md:flex-row gap-5 2xl:gap-10 py-8">
            {/* RECENT AUTHORS */}
            {data && <TaskTable tasks={data?.last10Task} />}

            {/* RECENT USERS */}
            {data && user?.isAdmin && <UserTable users={data?.users} />}
          </div>
        </>
      </div>
    </div>
  );
};

export default Dashboard;
