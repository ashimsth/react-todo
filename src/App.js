import React, { Component } from 'react';
import StatusBar from './components/statusBar';
import Todos from './components/todos';
import Todo from './components/todo';
import NewTodo from './components/newTodo';

class App extends Component {
  state = {  
    todos : [
      {id:1, value:'Todo 1', completed: true},
      {id:2, value:'Todo 2', completed:false},
      {id:3, value:'Todo 3', completed:false}
    ]
  }; 

  handleDelete = (todoId) => {
    const todos = this.state.todos.filter(todo => todo.id !== todoId);
    this.setState({todos});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const newTask = e.target[0].value;

    if(!newTask) return;

    const todos = [... this.state.todos];
    let newTodo = {};

    if(todos.length > 0) {
      const lastTodo = {...todos[todos.length-1]};
      newTodo = {id:lastTodo.id+1, value:newTask, completed:false};
    } else {
      newTodo = {id:1, value:newTask};
    }

    todos.push(newTodo);
    this.setState({todos});
    e.target[0].value = '';
  };

  handleMarkComplete = (todo) => {
    const todos = [...this.state.todos];
    const index = todos.indexOf(todo);
    todos[index] = {...todo};
    todos[index].completed = true;
    this.setState({todos});
  }

  render() { 
    return (
      <div className='col-lg-8 mx-auto p-3 py-md-5'>
        <header className='d-flex align-items-center pb-3 mb-5 border-bottom'>
          <span className='fs-4'>TODO APP</span>
        </header>
        <main>
          <StatusBar totalTodos={this.state.todos.length} totalCompletedTodos={this.state.todos.filter(t => t.completed === true).length}/>
          <NewTodo onSubmit={this.handleSubmit}/>
          <Todos todos={this.state.todos} onDelete={this.handleDelete} onMarkComplete={this.handleMarkComplete}/>
        </main>
        <footer className='text-muted'>Copyright &copy; 2022</footer>
      </div>
    );
  }
}
 
export default App;
