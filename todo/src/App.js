import "./App.css";
import NewTodoForm from "./components/NewTodo/NewTodoForm";
import Todos from "./components/todo/Todo";

function App() {
  return (
    <div className="App">
      <div className="App">
        <h1>React Todo List </h1>
        <NewTodoForm />
        <Todos />
      </div>
    </div>
  );
}

export default App;
