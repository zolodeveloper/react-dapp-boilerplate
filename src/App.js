import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
const TodoList = require('../build/contracts/todoList.json');
const contract = require('truffle-contract');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoListInstance: {},
      todos: []
    }
  }

  async instantiateContract() {
    const todoList = contract(TodoList);
    todoList.setProvider(window.web3.currentProvider);
    const todoListInstance = await todoList.deployed();
    this.setState({ todoListInstance });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Sweeet
          </p>
        </header>
      </div>
    );
  }
}

export default App;
