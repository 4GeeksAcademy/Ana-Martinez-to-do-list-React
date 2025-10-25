import React, { useState } from "react";

const Home = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    const handleInputChange = (event) => {
        setNewTask(event.target.value);
    };

    const addTask = (event) => {
        if (event.key === "Enter" && newTask.trim() !== "") {
            setTasks([...tasks, { text: newTask, done: false }]);
            setNewTask("");
        }
    };

    const deleteTask = (index) => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    };

     return (
        <>
            <header className="header-coquette">
                <img src="src/img/ICONO-Photoroom.png" alt="Coquette Logo" className="logo-icon" />
                <h1>My <span className="text-blue">Tasks</span></h1>
            </header>

            <div className="container coquette-container">
                <div className="todo-card">
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control input-coquette"
                            placeholder="Añade una nueva tarea..."
                            value={newTask}
                            onChange={handleInputChange}
                            onKeyDown={addTask}
                        />
                    </div>

                    <ul className="list-group list-coquette">
                        {tasks.length === 0 ? (
                            <li className="list-group-item empty-state">
                                <div className="empty-emoji">🎀</div>
                                <p>No hay tareas, añadir tareas</p>
                            </li>
                        ) : (
                            tasks.map((task, index) => (
                                <li
                                    key={index}
                                    className={`list-group-item task-item ${task.done ? "task-completed" : ""}`}
                                >
                                    <span className="task-text">{task.text}</span>
                                    <button
                                        className="btn-delete"
                                        onClick={() => deleteTask(index)}
                                    >
                                        ✕
                                    </button>
                                </li>
                            ))
                        )}
                    </ul>

                    <div className="mt-3 task-counter">
                        <p>{tasks.length} item{tasks.length !== 1 ? "s" : ""} left</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;