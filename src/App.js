import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const DEFAULT_TODO = '';

const todo = [
  {
    name: 'laundry',
    objectID: 0,
  },
  {
    name: 'clean',
    objectID: 1,
  }
];


class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      todo: todo,
      todoAdd: DEFAULT_TODO,
    };

    this.todoSubmit = this.todoSubmit.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.onSubmitChange = this.onSubmitChange.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
  }

  addTodo(result) {
    const oldTodo = this.state.todo;
    const uniqueID = Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
    const todoUpdate = {
      name: result,
      objectID: uniqueID,
    }
    alert(todoUpdate);
    const newTodo = [...oldTodo, todoUpdate];
    alert(result);
    this.setState({
      todo: newTodo,
    });
  }

  todoSubmit(event) {
    const { todoAdd } = this.state;
    this.addTodo(todoAdd);
    event.preventDefault();
  }

  onSubmitChange(event) {
    this.setState({ todoAdd: event.target.value });
  }

  onDismiss(event) {
    console.log(event);
  }

  render() {
    const { todo, todoAdd } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <Search
            value={todoAdd}
            onSubmit={this.todoSubmit}
            onChange={this.onSubmitChange}
          >
            Add
          </Search>
          <Table 
            todo={todo}
            onDismiss={this.onDismiss}
          >
          </Table>
        </header>
        </div>
    );
  }
}

const Search = ({ value, onSubmit, children, onChange }) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        {children}
      </button>
    </form>
  );
}

const Table = ({ todo, onDismiss }) => 
      <div className='table'>
        {todo.map(item =>
        <div 
          key={item.objectID}
          onClick={() => onDismiss(item.objectID)}
        >
          <img 
            src={logo}
            className="App-logo" 
            alt="logo" 
          />
          <span>
            {item.name}
          </span>
        </div>
        )}
      </div> 

export default App;
