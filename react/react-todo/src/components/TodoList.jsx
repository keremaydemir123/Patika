import React from "react";

function TodoList({ todos, toggleCompleteTodo, deleteTodo, filter }) {
  if (todos.length > 0) {
    let filteredTodos;
    switch (filter) {
      case "active":
        filteredTodos = todos.filter((todo) => !todo.isCompleted);
        break;
      case "completed":
        filteredTodos = todos.filter((todo) => todo.isCompleted);
        break;
      default:
        filteredTodos = todos;
        break;
    }

    return (
      <ul className="todo-list">
        {filteredTodos.map((todo, index) => (
          <li key={index} className={todo.isCompleted ? "completed" : ""}>
            <div className="view">
              <input
                className="toggle"
                type="checkbox"
                onChange={() => toggleCompleteTodo(index)}
                checked={todo.isCompleted ? true : false}
              />
              <label>{todo.text}</label>
              <button
                className="destroy"
                onClick={() => deleteTodo(index)}
              ></button>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

export default TodoList;
