import TodoItem from "./TodoItems";
import "./Todo.css";

const Todos = (props) => {
  console.log(props.todos);
  return (
    <div className="todolist-board">
      {props.todos.map((todo) => {
        return <TodoItem key={Math.random()} title={todo.title} />;
      })}
    </div>
  );
};

export default Todos;
