import React from "react";

function Footer({ todos, removeCompletedTodos, filterTodos, filter }) {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{todos.length} </strong>
        item{todos.length > 1 ? "s" : ""} left
      </span>

      <ul className="filters">
        <li>
          <a
            href="#/"
            className={filter == "all" ? "selected" : ""}
            onClick={() => filterTodos("all")}
          >
            All
          </a>
        </li>
        <li>
          <a
            href="#/"
            className={filter == "active" ? "selected" : ""}
            onClick={() => filterTodos("active")}
          >
            Active
          </a>
        </li>
        <li>
          <a
            href="#/"
            className={filter == "completed" ? "selected" : ""}
            onClick={() => filterTodos("completed")}
          >
            Completed
          </a>
        </li>
      </ul>

      <button className="clear-completed" onClick={removeCompletedTodos}>
        Clear completed
      </button>
    </footer>
  );
}

export default Footer;
