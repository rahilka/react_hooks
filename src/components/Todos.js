import React from "react";
import TodoItem from "./TodoItem";

function Todos({ todos, markComplete, delTodo }) {
  return todos.map(todo => (
    <TodoItem
      key={todo.title}
      todo={todo}
      markComplete={markComplete}
      delTodo={delTodo}
    />
  ));
}

export default Todos;
