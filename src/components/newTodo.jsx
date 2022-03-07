import React, { Component } from "react";
class NewTodo extends Component {
  render() {
    return (
      <div className="mt-4 mb-4">
        <form onSubmit={this.props.onSubmit} className="form-todo">
          <input
            autoFocus
            className="form-control form-control-lg input-todo"
            type="text"
            placeholder="Add New Task"
          ></input>
        </form>
      </div>
    );
  }
}

export default NewTodo;
