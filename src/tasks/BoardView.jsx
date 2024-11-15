/** @format */

import { useCallback, useState } from "react";
import { useChangeTaskStageMutation } from "../redux/slices/api/taskApiSlice";
import TaskCard from "./TaskCard";
import { useDrop } from "react-dnd";
import { TASKS_URL } from "../utils/contants";

const BoardView = ({ tasks, setTasks }) => {
  const [changeStage] = useChangeTaskStageMutation();
  const [movingTaskId, setMovingTaskId] = useState(null);

  const handleTaskStageChange = async (taskId, newStage) => {
    try {
      await changeStage({ id: taskId, stage: newStage });
    } catch (error) {
      console.error("Error changing task stage:", error);
    }
  };

  const moveCard = useCallback(
    (id, stage) => {
      const { card, index } = findCard(id);

      if (card && card.stage !== stage) {
        handleTaskStageChange(card._id, stage);

        // Update tasks list with new stage
        const updatedTasks = tasks.map((task) =>
          task._id === id ? { ...task, stage } : task,
        );

        setTasks(updatedTasks);
      }
    },
    [tasks, setTasks],
  );

  const findCard = useCallback(
    (id) => {
      const card = tasks.find((task) => task._id === id);
      return { card, index: tasks.indexOf(card) };
    },
    [tasks],
  );

  const Column = ({ stage, children }) => {
    const [{ isOver }, drop] = useDrop({
      accept: TASKS_URL,
      drop: (item) => {
        if (item.stage !== stage) {
          moveCard(item.id, stage);
        }
      },
      collect: (monitor) => ({
        isOver: monitor.isOver(),
      }),
    });

    return (
      <div
        ref={drop}
        className={`flex flex-col gap-3 p-2 rounded-md ${
          isOver ? "bg-gray-200" : "bg-gray-100"
        }`}
      >
        {/* <h2 className="text-lg font-bold mb-2">
          {stage.charAt(0).toUpperCase() + stage.slice(1)}
        </h2> */}
        {children}
      </div>
    );
  };

  return (
    <div className="w-full py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 2xl:gap-10">
      <Column stage="todo">
        {tasks
          .filter((task) => task.stage === "todo")
          .map((task, index) => (
            <TaskCard
              key={task._id}
              task={task}
              index={index}
              moveCard={moveCard}
              findCard={findCard}
              isMoving={movingTaskId === task._id}
              onDragStart={() => setMovingTaskId(task._id)}
            />
          ))}
      </Column>
      <Column stage="in progress">
        {tasks
          .filter((task) => task.stage === "in progress")
          .map((task, index) => (
            <TaskCard
              key={task._id}
              task={task}
              index={index}
              moveCard={moveCard}
              findCard={findCard}
              isMoving={movingTaskId === task._id}
              onDragStart={() => setMovingTaskId(task._id)}
            />
          ))}
      </Column>
      <Column stage="completed">
        {tasks
          .filter((task) => task.stage === "completed")
          .map((task, index) => (
            <TaskCard
              key={task._id}
              task={task}
              index={index}
              moveCard={moveCard}
              findCard={findCard}
              isMoving={movingTaskId === task._id}
              onDragStart={() => setMovingTaskId(task._id)}
            />
          ))}
      </Column>
    </div>
  );
};

export default BoardView;
