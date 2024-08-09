import React from "react";

function Task({ text, category, handleDelete }) {

  function handleClick() {
    handleDelete(text);  // Pass the text of the task to the delete function
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleClick}>X</button>
    </div>
  );
}

export default Task;
