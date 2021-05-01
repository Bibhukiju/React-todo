import { useState } from "react";
import "./App.css";
import NewTodoForm from "./components/NewTodo/NewTodoForm";
import Todos from "./components/todo/Todo";
const INITIALTODO = [];
function App() {
  const [todos, setTodos] = useState(INITIALTODO);

  const addToDo = (newTodo) => {
    console.log(newTodo);
    setTodos((prevState) => {
      const a = [newTodo, ...prevState];
      console.log(a);
      return a;
    });
  };
  return (
    <div className="App">
      <div className="App">
        <h1>React Todo List </h1>
        <NewTodoForm onAddTodo={addToDo} />
        <Todos todos={todos} />
      </div>
    </div>
  );
}

export default App;
