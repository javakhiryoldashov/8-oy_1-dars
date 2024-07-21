import React, { useState } from "react";
import Aside from "../../components/aside/Aside";
import { IoAddCircleOutline } from "react-icons/io5";

const Today = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "DataBase create for company",
      status: false,
    },
    {
      id: 2,
      title: "Website templates",
      status: false,
    },
    {
      id: 3,
      title: "Meet work team",
      status: true,
    },
  ]);

  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim()) {
      setTasks([
        ...tasks,
        {
          id: tasks.length + 1,
          title: newTask,
          status: false,
        },
      ]);
      setNewTask("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddTask();
    }
  };

  const handleToggleStatus = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, status: !task.status } : task
      )
    );
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen md:space-x-7 space-y-7 md:space-y-0">
      <Aside />

      <div className="flex-1 md:px-7 flex flex-col">
        <div className="flex gap-6 items-center mb-4">
          <h2 className="text-3xl font-medium">Today</h2>

          <span className="border border-[#00000066] py-1 px-6 rounded-[100px_50px_100px_100px]">
            {Math.floor(Math.random() * 25)}
          </span>
        </div>

        <div className="border-2 border-[#00000066] py-5 px-8 rounded-2xl flex-1 flex flex-col">
          <h2 className="text-3xl font-medium mb-4">Tasks</h2>

          <div className="flex items-center rounded-2xl p-3 text-slate-900 border border-[#00000066] mb-7">
            <button
              onClick={handleAddTask}
              disabled={!newTask.trim()}
              className="mr-4"
            >
              <IoAddCircleOutline className="text-slate-900 size-7" />
            </button>
            <input
              type="text"
              placeholder="Add new task"
              name="newTask"
              id="newTask"
              className="flex-1 bg-transparent outline-none placeholder:text-slate-800 font-normal"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </div>

          <ul className="flex-1 overflow-y-auto space-y-3">
            {tasks.map((task) => (
              <li
                key={task.id}
                className="text-gray-700 border-b-2 border-[#00000066] flex gap-3 pb-2 pl-3 items-center"
              >
                <input
                  type="checkbox"
                  checked={task.status}
                  onChange={() => handleToggleStatus(task.id)}
                  className="size-5"
                />
                {task.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Today;
