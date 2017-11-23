import React, { Component } from 'react';
import './App.css';
import Clock from './Clock'

class App extends Component {
  render() {
    return (
      <div className="APP">
        <div className="Welcome">
          <Welcome name="Daji" />
          <Welcome name="Beom" />
          <Welcome name="Sam" />
        </div>
        <div className="Clock">
          <Clock />
          <Clock />
          <Clock />
        </div>
      </div>
    );
  }
}

function Welcome(props){
  return <h1> Hello, {props.name}</h1>;
}


export default App;
