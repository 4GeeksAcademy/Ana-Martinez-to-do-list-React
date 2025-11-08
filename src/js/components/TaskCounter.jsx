import React from "react";

const TaskCounter = ({ taskCount, onDeleteAll }) => {
  return (
    <div className="mt-3 task-counter">
      <p>{taskCount} item{taskCount !== 1 ? "s" : ""} left</p>
      {taskCount > 0 && (
        <button
          className="btn-clean-all"
          onClick={onDeleteAll}
        >
          🗑️ Limpiar todas las tareas
        </button>
      )}
    </div>
  );
};

export default TaskCounter;
