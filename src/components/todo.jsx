import React, { Component } from "react";
class Todo extends Component {
  getTodoNameClasses() {
    let classes = "todo-name";
    classes += this.props.todo.completed ? " text-decoration-line-through" : "";
    return classes;
  }

  getTodoMarkCompleteButtonClasses() {
    let classes = "btn btn-primary m-1 btn-todo-mark-complete";
    classes += this.props.todo.completed ? " disabled" : "";
    return classes;
  }

  render() {
    const { todo, onDelete, onMarkComplete } = this.props;
    return (
      <tr>
        <th scope="row" className={this.getTodoNameClasses()}>
          {todo.value}
        </th>
        <td>
          <button
            type="button"
            className={this.getTodoMarkCompleteButtonClasses()}
            onClick={() => onMarkComplete(todo)}
          >
            Mark Complete
          </button>
          <button
            type="button"
            className="btn btn-danger btn-todo-delete"
            onClick={() => onDelete(todo.id)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default Todo;
