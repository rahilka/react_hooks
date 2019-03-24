import React, { useState, useEffect } from "react";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import axios from "axios";

import "./App.css";

function App(props) {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then(res => setTodos(res.data));
  }, []);

  // Toggle Complete
  const markComplete = title => {
    setTodos(
      todos.map(todo => {
        if (todo.title === title) todo.completed = !todo.completed;
        return todo;
      })
    );
  };

  // Delete Todo
  const delTodo = id => {
    const filteredTodos = todos.filter(todo => todo.id !== id);
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => setTodos(filteredTodos));
  };

  // Add Todo
  const addTodo = title => {
    axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        title: title,
        completed: false,
      })
      .then(res => setTodos([...todos, res.data]));
  };

  return (
    <div className="App">
      <div className="container">
        <header>
          <h1>TodoList</h1>
        </header>
        <AddTodo addTodo={addTodo} />
        <Todos todos={todos} markComplete={markComplete} delTodo={delTodo} />
      </div>
    </div>
  );
}

export default App;
