import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Logon from './Logon.js';
import athletes from './data/athletes';

class App extends Component {
  render() {
console.log(athletes);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <div>
          <Logon />
        </div>

        <div>
          {athletes.map(athleteData => athleteData.name)}
        </div>
      </div>
    );
  }
}

export default App;
