import React from "react";

const EmptyState = () => {
  return (
    <li className="list-group-item empty-state">
      <div className="empty-emoji">🎀</div>
      <p>No hay tareas, añadir tareas</p>
    </li>
  );
};

export default EmptyState;