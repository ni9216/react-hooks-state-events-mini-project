import React from 'react';

const Task = ({ task, onDeleteTask }) => {
  const handleDelete = () => {
    onDeleteTask(task.id);
  };

  if (!task) return null; // Defensive check

  return (
    <div>
      <p>{task.text} - {task.category}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Task;
