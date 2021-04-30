import { useState } from "react";
import "./NewTodoForm.css";
const NewTodoForm = () => {
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
      title,
      date,
    };
    console.log(obj);
    setTitle("");
    setDate("");
  };
  return (
    <div className="form-container">
      <div className="inputDiv">
        <label>Title</label>
        <input type="text" onChange={titleChangeHandler}></input>
      </div>
      <div className="inputDiv">
        <label>Date</label>
        <input
          type="Date"
          min="2019-01-01"
          max="2021-12-31"
          onChange={dateChangeHandler}
        ></input>
      </div>
      <div className="btn">
        <button type="submit" onClick={addToList}>
          {" "}
          Add To List
        </button>
      </div>
    </div>
  );
};

export default NewTodoForm;
