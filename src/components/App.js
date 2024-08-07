import React, { useState } from 'react';
import TaskList from './TaskList';
import CategoryFilter from './CategoryFilter';
import NewTaskForm from './NewTaskForm';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Task 1', category: 'Work' },
    { id: 2, text: 'Task 2', category: 'Personal' },
  ]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Work', 'Personal'];

  const handleAddTask = (task) => {
    setTasks([...tasks, { ...task, id: tasks.length + 1 }]);
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const filteredTasks =
    selectedCategory === 'All'
      ? tasks
      : tasks.filter((task) => task.category === selectedCategory);

  return (
    <div>
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onCategorySelect={handleCategorySelect}
      />
      <TaskList tasks={filteredTasks} onDeleteTask={handleDeleteTask} />
      <NewTaskForm categories={categories} onTaskFormSubmit={handleAddTask} />
    </div>
  );
};

export default App;
