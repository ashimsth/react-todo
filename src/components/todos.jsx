import React, { Component } from "react";
import Todo from "./todo";

class Todos extends Component {
  render() {
    const { todos, onDelete, onMarkComplete } = this.props;
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Task</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <Todo
                key={todo.id}
                todo={todo}
                onDelete={onDelete}
                onMarkComplete={onMarkComplete}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Todos;
