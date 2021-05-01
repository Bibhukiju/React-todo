import { useState } from "react";
import "./NewTodoForm.css";
const NewTodoForm = (props) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };
  const addToList = () => {
    const obj = {
      isCompleted: false,
      title,
      date,
    };
    console.log(obj);
    setTitle("");
    setDate("");
    props.onAddTodo(obj);
  };
  return (
    <div className="form-container">
      <div className="inputDiv">
        <label>Title</label>
        <input type="text" onChange={titleChangeHandler} value={title}></input>
      </div>
      <div className="inputDiv">
        <label>Date</label>
        <input
          type="Date"
          value={date}
          min="2019-01-01"
          max="2021-12-31"
          onChange={dateChangeHandler}
        ></input>
      </div>
      <div className="btn">
        <button type="submit" onClick={addToList}>
          Add To List
        </button>
      </div>
    </div>
  );
};

export default NewTodoForm;
