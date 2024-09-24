/** @format */

import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Compnonents/NavBar/NavBar";
import SideBar from "./Compnonents/SideBar/SideBar";
import Docs from "./Compnonents/SideBar/Docs";
import Home from "./Compnonents/SideBar/Home";
import Profile from "./Compnonents/SideBar/Profile";
import Signout from "./Compnonents/FormPages/Signout";
import SignIn from "./Compnonents/FormPages/SignIn";
import Login from "./Compnonents/FormPages/Login";
import Inbox from "./Compnonents/Inbox/Inbox";
import { FaInbox } from "react-icons/fa";
import { useState } from "react";
import Dashboard from "./Compnonents/SideBar/Dashboard";
import Clip from "./Compnonents/SideBar/Clip";
import Timesheet from "./Compnonents/SideBar/Timesheet";

function App() {
  const [quote, setQuote] = useState(
    "In the middle of every difficulty lies opportunity.",
  );
  const quotes = [
    "In the middle of every difficulty lies opportunity ,  _Albert Einstein",
    "The only way to do great work is to love what you do.    _Steve Jobs",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.   _ Winston Churchill",
    "Be yourself; everyone else is already taken.   _Oscar Wilde",
    "The only limit to our realization of tomorrow is our doubts of today.    _Franklin D. Roosevelt",
  ];

  // eslint-disable-next-line react/prop-types
  const CardComponent = ({ icon, title, message, quote, handleCard }) => {
    return (
      <div className="flex flex-col justify-center items-center h-full w-full bg-white gap-2 mt-8">
        {icon}
        <h2 className="text-xl font-semibold mt-4">{title}</h2>
        <p className="text-gray-400 mt-4">{message}</p>
        <button
          className=" text-gray-400 font-bold px-2 p-1 border rounded-xl mt-12"
          onClick={handleCard}
        >
          Motivational Quote
        </button>
        <h3 className="font-bold mt-8">{quote}</h3>.
        <button
          className=" text-gray-400 font-bold px-2 p-1 border rounded-xl "
          onClick={handleCard}
        >
          Learn more
        </button>
      </div>
    );
  };

  function handleQuote() {
    const random = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(random);
  }

  return (
    <div className="h-full max-w-1440 bg-white flex flex-col">
      <BrowserRouter>
        <NavBar />
        <div className="flex gap-4 h-full bg-white">
          <SideBar />
          <div className="flex justify-between w-full">
            <Routes>
              <Route path="home" element={<Home />} />
              <Route path="inbox" element={<Inbox />}>
                <Route
                  path="important"
                  element={
                    <CardComponent
                      icon={<FaInbox size={50} className="text-blue-200" />}
                      title="Inbox Zero"
                      message="Congratulations! You cleared your important notifications 🎉"
                      quote={quote}
                      handleCard={handleQuote}
                    />
                  }
                />
                <Route
                  path="other"
                  element={
                    <CardComponent
                      icon={<FaInbox size={50} className="text-blue-200" />}
                      title="Inbox Zero"
                      message="Congratulations! You cleared your important notifications 🎉"
                      quote={quote}
                      handleCard={handleQuote}
                    />
                  }
                />
                <Route
                  path="snoozed"
                  element={
                    <CardComponent
                      icon={<FaInbox size={50} className="text-blue-200" />}
                      title="Inbox Zero"
                      message="Congratulations! You cleared your important notifications 🎉"
                      quote={quote}
                      handleCard={handleQuote}
                    />
                  }
                />
                <Route
                  path="Cleared"
                  element={
                    <CardComponent
                      icon={<FaInbox size={50} className="text-blue-200" />}
                      title="You don't have any Cleared notifications"
                      message="Learn how to clear in inbox"
                      quote={quote}
                      handleCard={handleQuote}
                    />
                  }
                />
              </Route>
              <Route path="docs" element={<Docs />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="clip" element={<Clip />} />
              <Route path="time" element={<Timesheet />} />
              <Route path="profile" element={<Profile />} />
              <Route path="signout" element={<Signout />} />
              <Route path="signin" element={<SignIn />} />
              <Route path="login" element={<Login />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
