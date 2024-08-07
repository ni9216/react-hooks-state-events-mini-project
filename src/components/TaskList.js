import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, onDeleteTask }) => {
  return (
    <div>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDeleteTask={onDeleteTask} />
      ))}
    </div>
  );
};

export default TaskList;
