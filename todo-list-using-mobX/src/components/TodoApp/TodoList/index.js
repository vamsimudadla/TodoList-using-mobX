import React, { Component } from "react";
import FilterButtons from "./FilterButtons";
import TodoItem from "./TodoItem";
import { observer } from "mobx-react";
@observer
class TodoList extends Component {
  displayTodos = () => {
    const todos = this.props.filteredTodoItems;
    return todos.map(todo => (
      <TodoItem todo={todo} key={todo.id} deleteTodo={this.props.deleteTodo} />
    ));
  };

  render() {
    return (
      <div>
        {this.displayTodos()}
        {this.props.todosLength ? (
          <FilterButtons
            allTodos={this.props.allTodos}
            activeTodos={this.props.activeTodos}
            completedTodos={this.props.completedTodos}
            deleteCompleted={this.props.deleteCompleted}
            clearCompleted={this.props.clearCompleted}
            remainingItems={this.props.remainingItems}
            filterApplied={this.props.filterApplied}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default TodoList;
