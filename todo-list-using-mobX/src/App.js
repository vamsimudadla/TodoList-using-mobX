import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoStore from "./Store/TodoStore";
import Todo from "./Store/model/Todo";
import TodoApp from "./components/TodoApp";
const todoStore = new TodoStore();
function App() {
  return (
    <div className="App">
      <div className="background-todo">todos</div>
      <div className="components">
        <TodoApp todoStore={todoStore} />
      </div>
    </div>
  );
}

export default App;
