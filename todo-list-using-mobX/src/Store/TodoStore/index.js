import { observable, action, computed, get } from "mobx";
import Todo from "../model/Todo";

class TodoStore {
  @observable todos = [];
  @observable appliedTodo = "ALL";

  @action.bound
  addNewTodo(todoDescription) {
    const todo = {
      id: Math.random(),
      todoDescription: todoDescription,
      completed: false
    };
    const newTodo = new Todo(todo);
    this.todos.push(newTodo);
  }

  @action.bound
  allTodos() {
    this.appliedTodo = "ALL";
  }

  @action.bound
  activeTodos() {
    this.appliedTodo = "ACTIVE";
  }

  @action.bound
  completedTodos() {
    this.appliedTodo = "COMPLETED";
  }

  @action.bound
  deleteTodo(todo) {
    let confirmation = window.confirm("You Want to delete");
    if (confirmation) this.todos.splice(this.todos.indexOf(todo), 1);
  }

  @action.bound
  deleteCompleted = () => {
    const todos = this.todos.filter(todo => todo.completed === false);
    this.todos = todos;
  };

  @computed get clearCompleted() {
    return this.todos.filter(todo => todo.completed === true).length;
  }

  @computed get remainingItems() {
    return this.todos.filter(todo => todo.completed === false).length;
  }

  @computed get filteredTodoItems() {
    if (this.appliedTodo === "ALL") return this.todos;
    else if (this.appliedTodo === "ACTIVE")
      return this.todos.filter(todo => todo.completed === false);
    else if (this.appliedTodo === "COMPLETED")
      return this.todos.filter(todo => todo.completed === true);
  }
}

export default TodoStore;
