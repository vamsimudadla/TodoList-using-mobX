import React, { Component } from "react";
import "./styles.css";
import { observer } from "mobx-react";
@observer
class FilterButtons extends Component {
  allTodos = e => {
    this.props.allTodos(e.target.value);
  };

  activeTodos = e => {
    this.props.activeTodos(e.target.value);
  };

  completedTodos = e => {
    this.props.completedTodos(e.target.value);
  };

  deleteCompleted = e => {
    this.props.deleteCompleted();
  };

  render() {
    return (
      <div className="button-block">
        <span className="remaining-todos-count">
          {this.props.remainingItems} items left
        </span>
        <button
          type="button"
          value="ALL"
          onClick={this.allTodos}
          className={
            this.props.filterApplied === "ALL"
              ? "active-all-button"
              : "all-button"
          }
        >
          All
        </button>
        <button
          type="button"
          value="ACTIVE"
          onClick={this.activeTodos}
          className={
            this.props.filterApplied === "ACTIVE"
              ? "active-active-button"
              : "active-button"
          }
        >
          Active
        </button>
        <button
          type="button"
          value="COMPLETED"
          onClick={this.completedTodos}
          className={
            this.props.filterApplied === "COMPLETED"
              ? "active-completed-button"
              : "completed-button"
          }
        >
          completed
        </button>
        {this.props.clearCompleted > 0 ? (
          <button
            type="button"
            value="CLEAR COMPLETED"
            onClick={this.deleteCompleted}
            className="clear-completed-button"
          >
            clear completed
          </button>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default FilterButtons;
