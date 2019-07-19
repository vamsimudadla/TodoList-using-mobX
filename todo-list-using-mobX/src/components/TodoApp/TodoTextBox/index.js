import React, { Component } from "react";
import "./styles.css";
import { observable } from "mobx";
import { observer } from "mobx-react";

@observer
class TodoTextBox extends Component {
  @observable todoDescription = this.props.todoDescription;

  addNewTodo = event => {
    let text = this.todoDescription.trim();
    if (event.key === "Enter") {
      if (this.todoDescription != "" && text.length > 0) {
        this.props.addNewTodo(this.todoDescription);
        this.todoDescription = "";
      }
    }
  };

  handleChange = e => {
    this.todoDescription = e.target.value;
  };

  render() {
    return (
      <div className="todo-block">
        <input
          className={this.props.todo_text_box}
          type="text"
          value={this.todoDescription}
          onKeyDown={this.addNewTodo}
          onChange={this.handleChange}
          placeholder="What needs to be done"
        />
      </div>
    );
  }
}

export default TodoTextBox;
