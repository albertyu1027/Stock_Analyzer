import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tech from "./components/technology";


// const App = () => <Tech />;

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <h2>HEllO People</h2>
          <input></input>
          <button> Search </button>
          
        </div> 
        
        <Tech />



        
      </div>
    );
  }
}

export default App;
