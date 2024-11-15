/** @format */

// src/features/TaskSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [], // This should be an empty array to avoid undefined issues
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addtask: (state, action) => {
      state.tasks.push(action.payload);
    },
    toggleTaskCompletion: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    editTask: (state, action) => {
      const { id, name } = action.payload; // Destructure id and new name from the action payload
      const task = state.tasks.find((task) => task.id === id);
      if (task) {
        task.name = name; // Update the task's name
      }
    },
  },
});

// Export actions to use in components
export const { addtask, toggleTaskCompletion, deleteTask, editTask } =
  taskSlice.actions;

// Export reducer to use in the store
export default taskSlice.reducer;
