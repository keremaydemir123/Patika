import { useState } from "react";

function Header({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const todo = {
      text: value,
      isCompleted: false,
    };
    if (!value) return; // if value is empty, don't add it to the list (prevent empty todos
    addTodo(todo);
    setValue("");
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={value}
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
    </header>
  );
}

export default Header;
