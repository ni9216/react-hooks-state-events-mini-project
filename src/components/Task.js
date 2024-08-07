import React from 'react';

const Task = ({ task, onDeleteTask }) => {
  const handleDelete = () => {
    onDeleteTask(task.id);
  };

  return (
    <div>
      <p>{task.text} - {task.category}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Task;
