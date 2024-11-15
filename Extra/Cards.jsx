/** @format */

// /** @format */
// import { useState } from "react";
// import { BsPlus, BsThreeDots } from "react-icons/bs";
// import { MdCloseFullscreen } from "react-icons/md";
// import { FaCheck } from "react-icons/fa";
// import { IoAddSharp, IoAppsOutline } from "react-icons/io5";
// // import Task from "./Task";

// function Cards() {
//   const [isTaskPopupVisible, setIsTaskPopupVisible] = useState(false);

//   const handleOpenTask = () => {
//     setIsTaskPopupVisible(true);
//   };

//   const handleCloseTask = () => {
//     setIsTaskPopupVisible(false);
//   };

//   return (
//     <>
//       <div className="w-full h-auto border rounded-lg shadow-md mb-4 mt-8 bg-gray-100 p-4">
//         <div className="flex justify-between">
//           <div className="flex items-center group text-gray-500 font-bold">
//             <span className="flex gap-2 justify-center items-center">
//               <IoAppsOutline className="opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
//               <h1>Assigned to me</h1>
//             </span>
//           </div>
//           <div className="flex gap-3 group">
//             <BsPlus className="opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
//             <MdCloseFullscreen className="opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
//             <BsThreeDots className="opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
//           </div>
//         </div>
//         <div className="">
//           <div className="flex justify-center mt-16">
//             <button className="flex items-center justify-center w-12 h-12 bg-gray-200 border rounded-md">
//               <FaCheck />
//             </button>
//           </div>
//           <div className="flex justify-center mt-4 font-thin text-gray-400">
//             <p>Tasks assigned to you will appear here.</p>
//           </div>
//           <div className="flex justify-center text-center items-center mt-4">
//             <button
//               className="flex gap-1 bg-blue-400 items-center text-center p-2 border rounded-md"
//               onClick={handleOpenTask}
//             >
//               <span>
//                 <IoAddSharp />
//               </span>
//               Add Task
//             </button>
//           </div>
//         </div>
//       </div>

//       {isTaskPopupVisible && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center h-full w-full">
//           <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-4xl h-11/12 max-h-full">
//             <button
//               className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-700"
//               onClick={handleCloseTask}
//             >
//               &times;
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default Cards;
