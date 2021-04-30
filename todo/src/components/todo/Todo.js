import TodoItem from "./TodoItems";
import "./Todo.css";


const Todos = () => {
  return (
    <div className="todolist-board">
      <TodoItem title={"hello"} />
      <TodoItem title={"World"} />
    </div>
  );
};

export default Todos;
