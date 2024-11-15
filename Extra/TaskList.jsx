/** @format */

// src/components/TaskList.jsx
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addtask,
  toggleTaskCompletion,
  deleteTask,
  editTask,
} from "./TaskSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";

const TaskList = () => {
  const [taskName, setTaskName] = useState("");
  const tasks = useSelector((state) => state.task.tasks) || [];
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (taskName.trim()) {
      dispatch(addtask({ id: Date.now(), name: taskName, completed: false }));
      setTaskName("");
    }
  };

  const handleEditTask = (task) => {
    const newName = prompt("Edit task name:", task.name);
    if (newName && newName.trim()) {
      dispatch(editTask({ id: task.id, name: newName }));
    }
  };

  return (
    <div className="p-4 max-w-lg mx-auto">
      <h2 className="text-2xl mb-4 text-center">Task List</h2>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="New task"
        className="border border-gray-300 p-2 rounded mb-2 w-full"
      />
      <button
        onClick={handleAddTask}
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 w-full"
      >
        Add Task
      </button>
      <ul className="mt-4 space-y-4">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center h-20"
            style={{ textDecoration: task.completed ? "line-through" : "none" }}
          >
            <span className="flex-1 text-lg">{task.name}</span>
            <div className="flex space-x-2">
              <button
                onClick={() => dispatch(toggleTaskCompletion(task.id))}
                className="bg-green-500 text-white p-2 rounded hover:bg-green-600 flex items-center"
              >
                <FontAwesomeIcon icon={faCheck} className="mr-1" />
                {task.completed ? "Undo" : "Complete"}
              </button>
              <button
                onClick={() => dispatch(deleteTask(task.id))}
                className="bg-red-500 text-white p-2 rounded hover:bg-red-600 flex items-center"
              >
                <FontAwesomeIcon icon={faTrashAlt} className="mr-1" />
                Delete
              </button>
              <button
                onClick={() => handleEditTask(task)}
                className="bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600 flex items-center"
              >
                <FontAwesomeIcon icon={faEdit} className="mr-1" />
                Edit
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
