import React from "react";

const TaskInput = ({ newTask, onInputChange, onAddTask }) => {
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control input-coquette"
        placeholder="Añade una nueva tarea..."
        value={newTask}
        onChange={onInputChange}
        onKeyDown={onAddTask}
      />
    </div>
  );
};

export default TaskInput;
