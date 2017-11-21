import React, { Component } from 'react';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="APP">
        <Welcome name="Daji" />
        <Welcome name="Beom" />
        <Welcome name="Sam" />
      </div>
    );
  }
}

function Welcome(props){
  return <h1> Hello, {props.name}</h1>;
}


export default App;
