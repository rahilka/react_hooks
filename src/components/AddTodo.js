import React from "react";
import "./../App.css";
import { useInputValue } from "../hooks/useInputValue";

function AddTodo({ addTodo }) {
  const [title, setTitle] = useInputValue("");

  const onSubmit = e => {
    e.preventDefault();
    addTodo(title);
    setTitle("");
  };

  return (
    <div className="input-wrapper">
      <form onSubmit={onSubmit} className="form-wrapper">
        <input
          type="text"
          name="title"
          placeholder="Add Todo ..."
          value={title}
          onChange={setTitle}
        />
        <input type="submit" value="Submit" className="btn" />
      </form>
    </div>
  );
}

export default AddTodo;
