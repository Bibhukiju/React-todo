import React, { useState } from "react";
import "./TodoItems.css";

const TodoItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const changeTitle = () => {
    setTitle("Changed");
  };
  const deleteTodo = () => {
    setTitle("Deleted");
  };
  return (
    <div className="todo-item">
      <input type="checkbox"></input>
      <div className="titleDiv">
        <h2>{title}</h2>
      </div>
      <div>
        <button onClick={changeTitle}>Edit</button>
        <button onClick={deleteTodo}>Delete</button>
      </div>
    </div>
  );
};

export default TodoItem;
