import React, { Component } from 'react';
import './App.css';
import Clock from './Clock'
import Toggle from './Toggle'

class App extends Component {
  render() {
    return (
      <div className="APP">
        <div className="Welcome">
          <Welcome name="Daji" />
        </div>
        <div className="Clock">
          <Clock />
          <Toggle />
        </div>
      </div>
    );
  }
}

function Welcome(props){
  return <h1> Hello, {props.name}</h1>;
}


export default App;
