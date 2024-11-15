/** @format */

import { SiGoogledocs } from "react-icons/si";
import NavList from "../Inbox/NavList";
import { Outlet } from "react-router";
import { IoDocumentTextOutline } from "react-icons/io5";
import wiki from "../../public/Assets/wiki.svg";
import home from "../../public/Assets/home.svg";
import knowledge from "../../public/Assets/pic3.svg";
import team from "../../public/Assets/team.svg";
// import Task from "../DashBoard/Task";
// import TaskList from "../../features/TaskList";

const navDocs = [{ label: "DOCS", link: "/docs", icon: <SiGoogledocs /> }];
const DocsCard = ({ title, icon, para }) => {
  return (
    <div>
      <div className="">
        <h1 className="font-bold ">{title}</h1>
        <span className="flex items-center justify-center   p-4">{icon}</span>
        <p className="text-sm text-gray-400 flex items-center justify-center">
          {para}
        </p>
      </div>
    </div>
  );
};
// eslint-disable-next-line react/prop-types
const CreateCard = ({ title, img, desc }) => {
  return (
    <div className=" w-[28%] h-18 bg-white p-4 border rounded-md hover:bg-gray-200">
      <span className="flex gap-4">
        {img}
        <div className="flex flex-col">
          <h2 className="text-gray-800 font-semibold text-sm">{title}</h2>
          <p className="text-sm text-gray-400">{desc}</p>
        </div>
      </span>
    </div>
  );
};
// eslint-disable-next-line react/prop-types
function Docs({ navData = navDocs, activeItem }) {
  return (
    <div className="w-full bg-white flex flex-col p-2">
      <nav className="flex justify-between items-center border-b-2 border-b-gray-100">
        <NavList navData={navData} activeItem={activeItem} />
        <div className="flex items-center p-2 gap-4">
          <input
            type="text"
            className="border rounded px-2 py-1 w-1/2 hover:bg-gray-300"
            placeholder="Search..."
          />
          <button className="bg-blue-400 p-1 border rounded-lg">
            Creat Docs
          </button>
        </div>
      </nav>

      <div className="flex justify-center items-center gap-4 mt-4">
        <Outlet />
      </div>
      <div className="flex  gap-3">
        <div className="w-[32%] h-[90%] border-2 border-gray-100  rounded-lg mt-8 shadow-sm  p-4">
          <DocsCard
            title="Recent"
            icon={
              <IoDocumentTextOutline
                size={40}
                className="text-gray-400 flex items-center justify-center"
              />
            }
            para="Your recently opened Docs will show here."
          />
        </div>

        <div className="w-[32%] h-[90%] border-2 border-gray-100  rounded-lg mt-8 shadow-sm  p-4">
          <DocsCard
            title="Favorites"
            icon={
              <IoDocumentTextOutline
                size={40}
                className="text-gray-400 flex items-center justify-center"
              />
            }
            para="Your favorited Docs will show here"
          />
        </div>
        <div className="w-[32%] h-[90%] border-2 border-gray-100  rounded-lg mt-8 shadow-sm  p-4">
          <DocsCard
            title="Created to Me"
            icon={
              <IoDocumentTextOutline
                size={40}
                className="text-gray-400 flex items-center justify-center"
              />
            }
            para="All Docs created by you will shw here."
          />
        </div>
      </div>
      <div className="mt-12 mb-12 w-[98%]  h-[18%] border rounded-lg p-4 ">
        <h1 className="mb-3 font-bold">Create first wiki</h1>
        <div className="flex gap-2">
          <CreateCard
            img={<img src={wiki} alt="wiki" className="w-10" />}
            title="Comapany wiki"
            desc="All-in-one wiki"
          />
          <CreateCard
            img={<img src={home} alt="home" className="w-10" />}
            title="Comapany Home"
            desc="Company intranet hub"
          />
          <CreateCard
            img={<img src={knowledge} alt="knowledge" className="w-10" />}
            title="Comapany Home"
            desc="Company intranet hub"
          />
          <CreateCard
            img={<img src={team} alt="team" className="w-10" />}
            title="Comapany Home"
            desc="Company intranet hub"
          />
        </div>
      </div>
      {/* <TaskList /> */}
    </div>
  );
}

export default Docs;
