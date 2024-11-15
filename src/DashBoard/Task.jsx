/** @format */

// //** @format */

// import { useEffect, useState } from "react";
// import { AiOutlinePlusCircle } from "react-icons/ai";
// import { BiTask } from "react-icons/bi";
// import { BsPlus, BsThreeDots } from "react-icons/bs";
// import { CiEdit } from "react-icons/ci";
// import { FaColumns, FaLayerGroup } from "react-icons/fa";
// import { FaCircleDot } from "react-icons/fa6";
// import { IoMdArrowDropleft } from "react-icons/io";
// import { IoAppsOutline, IoFilter } from "react-icons/io5";
// import { MdCloseFullscreen, MdDelete } from "react-icons/md";
// import { TbSubtask } from "react-icons/tb";
// import { format } from "date-fns";

// const Task = () => {
//   const [todos, setTodos] = useState([]);
//   const [newTodo, setNewTodo] = useState({ name: "", assignee: "" });
//   const [editIndex, setEditIndex] = useState(null);

//   const handleNewTodoChange = (e) => {
//     setNewTodo({ ...newTodo, [e.target.name]: e.target.value });
//   };

//   const addTodo = () => {
//     if (newTodo.name && newTodo.assignee) {
//       setTodos([...todos, newTodo]);
//       setNewTodo({ name: "", assignee: "" });
//     }
//   };

//   const removeTodo = (id) => {
//     setTodos(todos.filter((_, i) => i !== id));
//   };

//   const handleTodoChange = (e, id) => {
//     const updatedTodos = todos.map((todo, i) =>
//       i === id ? { ...todo, [e.target.name]: e.target.value } : todo,
//     );
//     setTodos(updatedTodos);
//   };

//   const handleEditClick = (id) => {
//     setEditIndex(id);
//   };

//   const handleSaveEdit = () => {
//     setEditIndex(null);
//   };

//   const formatDate = (date) => {
//     return format(new Date(date), "dd-MM-yy");
//   };
//   useEffect(() => {
//     const storeData = JSON.parse(localStorage.getItem("todos"));
//     if (storeData) {
//       setTodos(storeData);
//     }
//   }, []);
//   useEffect(() => {
//     localStorage.setItem("todos", JSON.stringify(todos));
//   }, [todos]);
//   const buttons = [
//     { icon: <FaLayerGroup />, label: "Group status" },
//     { icon: <TbSubtask />, label: "Subtask" },
//     { icon: <FaColumns />, label: "Columns" },
//     { icon: <IoFilter />, label: "Filter" },
//     { icon: <BiTask />, label: "Show closed" },
//   ];

//   return (
//     <div className="bg-white w-1/4 border rounded-lg hover:outline hover:outline-2 hover:outline-gray-300 text-gray-600">
//       <div className="flex justify-between items-center p-3">
//         <div className="flex items-center group text-gray-500 font-bold">
//           <span className="flex gap-3 justify-center items-center">
//             <IoAppsOutline className="opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
//             <h1 className="text-center">Personal List</h1>
//           </span>
//         </div>
//         <div className="flex gap-3 group">
//           <BsPlus className="opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
//           <MdCloseFullscreen className="opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
//           <BsThreeDots className="opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
//         </div>
//       </div>
//       <div className="flex justify-around p-2 text-gray-500">
//         {buttons.map((button, id) => (
//           <button
//             key={id}
//             className="border rounded-lg p-1 hover:bg-blue-200 text-sm"
//           >
//             <span className="flex items-center gap-1">
//               {button.icon}
//               {button.label}
//             </span>
//           </button>
//         ))}
//         <input
//           type="text"
//           placeholder="Search"
//           className="w-[15%] border rounded-md bg-gray-100 hover:bg-gray-200 outline outline-1 text-center outline-gray-300 text-lg"
//         />
//       </div>
//       <div className="flex gap-3 items-center p-2 text-sm ">
//         <IoMdArrowDropleft size={22} />
//         <button className="bg-gray-200 border rounded-md p-1 text-gray-600 ">
//           <span className="flex items-center gap-2">
//             <FaCircleDot />
//             TO DO
//           </span>
//         </button>
//         <p>1</p>
//         <BsThreeDots />
//         <button
//           className="hover:bg-gray-200 border border-none rounded-lg p-1"
//           onClick={addTodo}
//         >
//           <span className="flex items-center gap-1">
//             <BsPlus />
//             Add Task
//           </span>
//         </button>
//       </div>
//       <div className="p-3 text-gray-500 text-sm flex items-center group border border-b-2 ">
//         <input
//           type="checkbox"
//           className="opacity-0 transition-opacity duration-300 group-hover:opacity-100"
//         />
//         <button className="w-[50%] hover:bg-gray-200 text-left p-1">
//           Name
//         </button>
//         <button className="w-[20%] hover:bg-gray-200 text-left p-1">
//           Assignee
//         </button>
//         <button className="w-[15%] hover:bg-gray-200 text-left p-1">
//           Due Date
//         </button>
//         <button className="hover:bg-gray-200 w-[12%] p-1.5 flex justify-end">
//           <AiOutlinePlusCircle size={16} />
//         </button>
//       </div>
//       {todos.map((todo, id) => (
//         <div key={id} className="flex gap-1 p-3 items-center">
//           <input type="checkbox" className="p-2" />
//           {editIndex === id ? (
//             <>
//               <input
//                 type="text"
//                 name="name"
//                 className="w-full outline-none bg-gray-100 p-2 ml-4 "
//                 value={todo.name}
//                 onChange={(e) => handleTodoChange(e, id)}
//               />
//               <input
//                 type="text"
//                 name="assignee"
//                 className="w-[20%] hover:bg-gray-200 text-left p-1 outline-none bg-gray-100"
//                 value={todo.assignee}
//                 onChange={(e) => handleTodoChange(e, id)}
//               />
//               <input
//                 type="date"
//                 name="date"
//                 className="w-[25%] outline-none bg-gray-100 "
//                 value={new Date(todo.date).toISOString().split("T")[0]}
//                 onChange={(e) => handleTodoChange(e, id)}
//               />
//               <button onClick={handleSaveEdit} className="text-blue-500">
//                 Save
//               </button>
//             </>
//           ) : (
//             <>
//               <span className="w-[50%]">{todo.name}</span>
//               <span className="w-[20%]">{todo.assignee}</span>
//               <span className="w-[15%]">{formatDate(todo.date)}</span>
//               <CiEdit onClick={() => handleEditClick(id)} />
//             </>
//           )}
//           <MdDelete onClick={() => removeTodo(id)} />
//         </div>
//       ))}

//       <div className="flex p-4 items-center">
//         <input
//           type="text"
//           name="name"
//           placeholder="Task Name"
//           className="w-[50%] outline-none bg-gray-100 p-1 "
//           value={newTodo.name}
//           onChange={handleNewTodoChange}
//         />
//         <input
//           type="text"
//           name="assignee"
//           placeholder="Assignee"
//           className="w-[25%] outline-none bg-gray-100 p-1"
//           value={newTodo.assignee}
//           onChange={handleNewTodoChange}
//         />
//         <input
//           type="date"
//           name="date"
//           className="w-[25%] outline-none bg-gray-100 p-1 text-gray-400 border-r rounded-md ml-2 "
//           value={
//             newTodo.date
//               ? new Date(newTodo.date).toISOString().split("T")[0]
//               : ""
//           }
//           onChange={handleNewTodoChange}
//         />
//       </div>
//       <button onClick={addTodo}>
//         <span className="flex items-center gap-1 p-2 border rounded-lg hover:bg-gray-300 m-2">
//           <BsPlus />
//           Add Task
//         </span>
//       </button>
//     </div>
//   );
// };

// export default Task;
