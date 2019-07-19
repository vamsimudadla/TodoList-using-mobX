import { observable, action } from "mobx";

class Todo {
  id;
  @observable todoDescription;
  @observable completed;

  constructor(todo) {
    this.id = todo.id;
    this.todoDescription = todo.todoDescription;
    this.completed = todo.completed;
  }

  @action
  onToggleCheckBox() {
    this.completed = !this.completed;
  }

  @action
  updateTodo(todoDescription) {
    this.todoDescription = todoDescription;
  }
}

export default Todo;
