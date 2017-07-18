import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import Provider from './Provider';
import reducers from './reducers';
import createStore from './createStore';

const store = createStore(reducers)

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <TodoList />
        <TodoForm />
      </Provider>
    );
  }
}

export default App;
