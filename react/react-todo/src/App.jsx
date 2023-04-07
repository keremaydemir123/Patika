import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const toggleCompleteTodo = (index) => {
    const newTodos = [...todos];
    const todo = newTodos[index];
    newTodos[index].isCompleted = !todo.isCompleted;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const filterTodos = (filter) => {
    setFilter(filter);
  };

  const removeCompletedTodos = () => {
    const newTodos = todos.filter((todo) => !todo.isCompleted);
    setTodos(newTodos);
  };

  return (
    <>
      <section className="todoapp">
        <Header addTodo={addTodo} />
        <TodoList
          todos={todos}
          filter={filter}
          toggleCompleteTodo={toggleCompleteTodo}
          deleteTodo={deleteTodo}
        />
        <Footer
          todos={todos}
          filter={filter}
          removeCompletedTodos={removeCompletedTodos}
          filterTodos={filterTodos}
        />
      </section>
    </>
  );
}

export default App;
