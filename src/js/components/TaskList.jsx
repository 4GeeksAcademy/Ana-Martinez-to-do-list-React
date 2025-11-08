import React from "react";
import TaskItem from "./TaskItem";
import EmptyState from "./EmptyState";

const TaskList = ({ tasks, onDeleteTask }) => {
  return (
    <ul className="list-group list-coquette">
      {tasks.length === 0 ? (
        <EmptyState />
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onDelete={onDeleteTask}
          />
        ))
      )}
    </ul>
  );
};

export default TaskList;
