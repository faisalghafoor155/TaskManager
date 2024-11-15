/** @format */

import { Transition } from "@headlessui/react";
import { Fragment, useRef } from "react";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet, Route, Routes, useLocation } from "react-router-dom";
import { Toaster } from "sonner";
import SideBar from "./SideBar/SideBar";
import Navbar from "./NavBar/NavBar";
// import { Dashboard, Login, TaskDetail, Tasks, Trash, Users } from "./pages";
import { setOpenSidebar } from "./redux/slices/authSlice";
import Dashboard from "./DashBoard/Dashboard";
import inbox from "./Inbox/Inbox";
import Home from "./SideBar/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Clip from "./SideBar/Clip";
import Timesheets from "./SideBar/Timesheet";
// import ImportantComponent from "./Inbox/Inbox";
// import OtherComponent from "./Compnonents/Inbox/Inbox";
import Tasks from "./pages/Tasks";
import Charts from "./pages/ChartComponent";
import ChartComponent from "./pages/ChartComponent";
import Inbox from "./Inbox/Inbox";
import Chats from "./Chats/Chats";
function Layout() {
  const { user } = useSelector((state) => state.auth);
  const location = useLocation();

  return user ? (
    <div className="w-full h-screen flex flex-col md:flex-row">
      <div className="w-1/5 h-screen bg-white dark:bg-[#1f1f1f] sticky top-0 hidden md:block">
        <SideBar />
      </div>

      <MobileSidebar />

      <div className="flex-1 overflow-y-auto">
        <div className="p-4 2xl:px-10">
          <Outlet />
        </div>
      </div>
    </div>
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}

const MobileSidebar = () => {
  const { isSidebarOpen } = useSelector((state) => state.auth);
  const mobileMenuRef = useRef(null);
  const dispatch = useDispatch();

  const closeSidebar = () => {
    dispatch(setOpenSidebar(false));
  };

  return (
    <>
      <Transition
        show={isSidebarOpen}
        as={Fragment}
        enter="transition-opacity duration-700"
        enterFrom="opacity-x-10"
        enterTo="opacity-x-100"
        leave="transition-opacity duration-700"
        leaveFrom="opacity-x-100"
        leaveTo="opacity-x-0"
      >
        {(ref) => (
          <div
            ref={(node) => (mobileMenuRef.current = node)}
            className={`md:hidden w-full h-full bg-black/40 transition-transform duration-700 transform
             ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
            onClick={() => closeSidebar()}
          >
            <div className="bg-white w-3/4 h-full">
              <div className="w-full flex justify-end px-5 pt-5">
                <button
                  onClick={() => closeSidebar()}
                  className="flex justify-end items-end"
                >
                  <IoMdClose size={25} />
                </button>
              </div>

              <div className="-mt-10">
                <SideBar />
              </div>
            </div>
          </div>
        )}
      </Transition>
    </>
  );
};

const App = () => {
  const theme = "light";

  return (
    <main className={theme}>
      <div className="w-full min-h-screen bg-[#f3f4f6] dark:bg-[#0d0d0df4]">
        <Navbar />
        <Routes>
          <Route element={<Layout />}>
            <Route index psth="/" element={<Navigate to="/Dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/chart" element={<ChartComponent />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/chats" element={<Chats />} />
            {/* <Route path="important" element={<ImportantComponent />} />
              <Route path="other" element={<OtherComponent />} /> */}
            {/* <Route path="snoozed" element={<SnoozedComponent />} />
              <Route path="cleared" element={<ClearedComponent />} /> */}
            <Route path="/home" element={<Home />} />
            {/* <Route path="/dashboard" element={<Dashboard />} /> */}
            <Route path="/inbox" element={<Inbox />} />
            <Route path="/clip" element={<Clip />} />
            <Route path="/time" element={<Timesheets />} />
            {/* <Route path="/tasks" element={<Tasks />} />
            <Route path="/completed/:status?" element={<Tasks />} />
            <Route path="/in-progress/:status?" element={<Tasks />} />
            <Route path="/todo/:status?" element={<Tasks />} />
            <Route path="/trashed" element={<Trash />} />
            <Route path="/task/:id" element={<TaskDetail />} />
            <Route path="/team" element={<Users />} /> */}
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>

      <Toaster richColors position="top-center" />
    </main>
  );
};

export default App;
