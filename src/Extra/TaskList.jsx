/** @format */

// /** @format */

// import { BsPlus, BsThreeDots } from "react-icons/bs";
// import { IoAppsOutline } from "react-icons/io5";
// import { IoMdArrowDropdown } from "react-icons/io";
// import { useState } from "react";
// import { CiEdit } from "react-icons/ci";
// import { MdDeleteOutline } from "react-icons/md";

// function TaskList() {
//   const [addTask, setAddTask] = useState("");
//   const [taskList, setTaskList] = useState([]);
//   const [assignee, setAssignee] = useState("");
//   const [isEditing, setIsEditing] = useState(false);
//   const [currentTaskIndex, setCurrentTaskIndex] = useState(null);
//   const [dueDate, stetDueDate] = useState("");
//   const [checkedTaskIndex, setCheckedTaskIndex] = useState(null); // Track which task's checkbox is checked

//   const handleAddTask = () => {
//     if (addTask.trim() !== "") {
//       const newTask = {
//         name: addTask,
//         assignee: assignee,
//         dueDate: dueDate,
//       };

//       if (isEditing) {
//         const updatedTasks = [...taskList];
//         updatedTasks[currentTaskIndex] = newTask;
//         setTaskList(updatedTasks);
//         setIsEditing(false);
//         setCurrentTaskIndex(null);
//       } else {
//         setTaskList([...taskList, newTask]);
//       }

//       setAddTask("");
//       setAssignee("");
//       stetDueDate("");
//     }
//   };

//   const handleEditTask = (index) => {
//     const taskToEdit = taskList[index];
//     setAddTask(taskToEdit.name);
//     setAssignee(taskToEdit.assignee);
//     stetDueDate(taskToEdit.dueDate);
//     setIsEditing(true);
//     setCurrentTaskIndex(index);
//     setCheckedTaskIndex(null); // Uncheck the checkbox after editing
//   };

//   const handleDeleteTask = (index) => {
//     const updatedTasks = taskList.filter((_, i) => i !== index);
//     setTaskList(updatedTasks);
//   };

//   const handleCheckboxChange = (index) => {
//     setCheckedTaskIndex(checkedTaskIndex === index ? null : index);
//   };

//   return (
//     <div className="w-5/6 h-auto border rounded-lg shadow-md bg-gray-100  mt-8 mb-4 text-gray-600">
//       <div className="flex justify-between p-4">
//         <div>
//           <span className="flex items-center gap-2 group">
//             <IoAppsOutline className="opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
//             Personal List
//           </span>
//         </div>
//         <div className="flex gap-3 group">
//           <BsPlus className="opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
//           <BsThreeDots className="opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
//         </div>
//       </div>

//       <div className="p-4">
//         <input
//           type="text"
//           placeholder="Search Task"
//           className="outline-none border rounded-lg text-center"
//         />
//       </div>
//       <div className="flex gap-3 items-center p-4">
//         <IoMdArrowDropdown />
//         <h2>Task</h2>
//         <BsThreeDots />
//       </div>
//       <div className="flex justify-between text-gray-400 border-b-2 p-4">
//         <span className="flex gap-2">
//           <input type="checkbox" />
//           <h3>Name</h3>
//         </span>
//         <h3>Assignee</h3>
//         <h3>Due Date</h3>
//       </div>

//       <div className="p-2 w-full">
//         {taskList.length > 0 ? (
//           taskList.map((task, index) => (
//             <div
//               key={index}
//               className="border rounded-lg p-2 shadow-sm flex items-center justify-between"
//             >
//               <div className="flex items-center">
//                 <input
//                   type="checkbox"
//                   onChange={() => handleCheckboxChange(index)}
//                   checked={checkedTaskIndex === index}
//                 />
//                 <div className="flex-1 text-center ml-2">
//                   <h4
//                     className="font-bold text-lg cursor-pointer"
//                     onClick={() => handleEditTask(index)}
//                   >
//                     {task.name}
//                   </h4>
//                 </div>
//               </div>
//               <div className="flex-1 text-center">
//                 <p className="text-sm text-gray-500">{task.assignee}</p>
//               </div>
//               <div className="flex-1 text-center">
//                 <p className="text-sm text-gray-500">{task.dueDate}</p>
//                 {checkedTaskIndex === index && (
//                   <div className="flex gap-4 justify-center mt-4">
//                     <button
//                       onClick={() => handleEditTask(index)}
//                       className="text-blue-500 hover:underline"
//                     >
//                       <CiEdit />
//                     </button>
//                     <button
//                       onClick={() => handleDeleteTask(index)}
//                       className="text-red-500 hover:underline"
//                     >
//                       <MdDeleteOutline />
//                     </button>
//                   </div>
//                 )}
//               </div>
//             </div>
//           ))
//         ) : (
//           <p className="text-center text-gray-500">No tasks available</p>
//         )}
//         <div className="p-4 border-t-2">
//           <input
//             type="text"
//             placeholder="Task description"
//             value={addTask}
//             onChange={(e) => setAddTask(e.target.value)}
//             className="w-full p-2 mb-2 focus:outline-none border rounded-lg"
//           />
//           <input
//             type="text"
//             placeholder="Assignee"
//             value={assignee}
//             onChange={(e) => setAssignee(e.target.value)}
//             className="w-full p-2 mb-2 focus:outline-none border rounded-lg"
//           />
//           <input
//             type="date"
//             value={dueDate}
//             onChange={(e) => stetDueDate(e.target.value)}
//             className="w-full mb-2 p-2"
//           />
//           <button
//             onClick={handleAddTask}
//             className="w-full p-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600"
//           >
//             {isEditing ? "Update Task" : "Add Task"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default TaskList;
