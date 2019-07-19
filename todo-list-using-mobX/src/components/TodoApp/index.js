import React, { Component } from "react";
import TodoTextBox from "./TodoTextBox";
import TodoList from "./TodoList";
import { observer } from "mobx-react";

@observer
class TodoApp extends Component {
  render() {
    const todoStore = this.props.todoStore;
    return (
      <div>
        <TodoTextBox
          addNewTodo={todoStore.addNewTodo}
          todo_text_box="todo-text-box"
          todoDescription=""
        />
        <TodoList
          todosLength={todoStore.todos.length}
          deleteTodo={todoStore.deleteTodo}
          filteredTodoItems={todoStore.filteredTodoItems}
          allTodos={todoStore.allTodos}
          activeTodos={todoStore.activeTodos}
          completedTodos={todoStore.completedTodos}
          deleteCompleted={todoStore.deleteCompleted}
          clearCompleted={todoStore.clearCompleted}
          remainingItems={todoStore.remainingItems}
          filterApplied={todoStore.appliedTodo}
        />
      </div>
    );
  }
}

export default TodoApp;
