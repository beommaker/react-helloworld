import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>
          I love you, {formatName(user)}
        </h1>
        {getGreeting(user)}
        {getGreeting()}
      </div>
    );
  }
}

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Daji',
  lastName: 'Lee',
};

function getGreeting(user) {
  if (user) {
    return <h1>I love you, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger</h1>;
}

const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world'
  }
};

export default App;
