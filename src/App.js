import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import elephantYoga from './images/yogielephant.jpeg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Life with an Elephant</h2>
        </div>
        <p><h1>Welcome</h1></p>
        <img src={elephantYoga}/>
        <div className="button-Wrapper">
          <div className="Button">Button</div>
        </div>
      </div>

    );
  }
}

export default App;
