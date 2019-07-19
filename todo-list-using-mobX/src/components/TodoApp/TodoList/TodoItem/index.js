import React, { Component } from "react";
import { observer } from "mobx-react";
import "./styles.css";
import EditableTodo from "./EditableTodo";

@observer
class TodoItem extends Component {
  onToggleCheckBox = e => {
    this.props.todo.onToggleCheckBox();
  };

  updateTodo = (todoDescription, todo) => {
    todo.updateTodo(todoDescription);
  };

  deleteTodo = () => {
    this.props.deleteTodo(this.props.todo);
  };
  render() {
    const todo = this.props.todo;
    const new_todo = (
      <div className="todo-item">
        <div className="todo-styles todo-block">
          {todo.completed ? (
            <img
              className="checkbox"
              src="/assets/checked.png"
              onClick={this.onToggleCheckBox}
            />
          ) : (
            <img
              className="checkbox"
              src="/assets/unchecked-icon.png"
              onClick={this.onToggleCheckBox}
            />
          )}
          <EditableTodo
            className="editable-style"
            todo={this.props.todo}
            updateTodo={this.updateTodo}
          />
          <img
            className="cross-image"
            src="/assets/cross-mark.png"
            className="cross-image"
            alt="none"
            onClick={this.deleteTodo}
          />
        </div>
      </div>
    );
    return <div>{new_todo}</div>;
  }
}

export default TodoItem;
