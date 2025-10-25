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
        <div className="container">
            <h1>To - do List</h1>
            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="What needs to be done?"
                    value={newTask}
                    onChange={handleInputChange}
                    onKeyDown={addTask}
                />
            </div>
            <ul className="list-group">
                {tasks.length === 0 ? (
                    <li className="list-group-item text-center">No tasks, add a task</li>
                ) : (
                    tasks.map((task, index) => (
                        <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                            {task.text}
                            <button className="btn btn-danger" onClick={() => deleteTask(index)}>
                                X
                            </button>
                        </li>
                    ))
                )}
            </ul>
            <div className="mt-3">
                <p>{tasks.length} item{tasks.length !== 1 && "s"} left</p>
            </div>
        </div>
    );
};

export default Home;