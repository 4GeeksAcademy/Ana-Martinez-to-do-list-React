import React, { useState, useEffect } from "react";
import { todoApi } from "../services/todoApi";
import Header from "./Header";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";
import TaskCounter from "./TaskCounter";

const USERNAME = "ana_martinez";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  // Cargar tareas al iniciar
  useEffect(() => {
    const initializeTasks = async () => {
      const loadedTasks = await todoApi.loadTasks(USERNAME);
      setTasks(loadedTasks);
    };
    initializeTasks();
  }, []);

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleAddTask = async (event) => {
    if (event.key === "Enter" && newTask.trim() !== "") {
      const success = await todoApi.addTask(USERNAME, newTask.trim());
      if (success) {
        const updatedTasks = await todoApi.loadTasks(USERNAME);
        setTasks(updatedTasks);
        setNewTask("");
      }
    }
  };

  const handleDeleteTask = async (taskId) => {
    const success = await todoApi.deleteTask(taskId);
    if (success) {
      const updatedTasks = await todoApi.loadTasks(USERNAME);
      setTasks(updatedTasks);
    }
  };

  const handleDeleteAllTasks = async () => {
    const success = await todoApi.deleteAllTasks(tasks);
    if (success) {
      setTasks([]);
    }
  };

  return (
    <>
      <Header />
      <div className="container coquette-container">
        <div className="todo-card">
          <TaskInput 
            newTask={newTask}
            onInputChange={handleInputChange}
            onAddTask={handleAddTask}
          />
          <TaskList 
            tasks={tasks}
            onDeleteTask={handleDeleteTask}
          />
          <TaskCounter 
            taskCount={tasks.length}
            onDeleteAll={handleDeleteAllTasks}
          />
        </div>
      </div>
    </>
  );
};

export default Home;