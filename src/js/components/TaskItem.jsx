import React from "react";

const TaskItem = ({ task, onDelete }) => {
  return (
    <li
      className={`list-group-item task-item ${task.is_done ? "task-completed" : ""}`}
    >
      <span className="task-text">{task.label}</span>
      <button
        className="btn-delete"
        onClick={() => onDelete(task.id)}
      >
        ✕
      </button>
    </li>
  );
};

export default TaskItem;
