import React, { Component } from "react";
import TodoTextBox from "../../../TodoTextBox";
import "./styles.css";
import { observable } from "mobx";
import { observer } from "mobx-react";

@observer
class EditableTodo extends Component {
  @observable edit = false;

  handleDoubleClick = () => {
    this.edit = true;
  };

  updateTodo = todoDescription => {
    this.props.updateTodo(todoDescription, this.props.todo);
    this.edit = false;
  };

  displayEditableTodo = () => {
    const todo = this.props.todo;
    if (this.edit && !todo.completed) {
      return (
        <TodoTextBox
          addNewTodo={this.updateTodo}
          todoDescription={todo.todoDescription}
          todo_text_box="editable-text-box"
        />
      );
    } else {
      const normal_todo = (
        <span
          className={todo.completed === true ? "strike-text" : "dont-strike"}
          onDoubleClick={this.handleDoubleClick}
        >
          {todo.todoDescription}
        </span>
      );
      return normal_todo;
    }
  };

  render() {
    return (
      <div className={this.props.className}>{this.displayEditableTodo()} </div>
    );
  }
}
export default EditableTodo;
