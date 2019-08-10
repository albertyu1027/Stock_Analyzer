import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Analyze from "./pages/Analyze";



// const App = () => <Tech />;

class App extends Component {

componentDidMount() {
  //render database data tables
  //make all API calls to update all states across components

};


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <h2>HEllO People</h2>
          <input></input>
          <button className= "apisearch"> Search </button>
          
        </div> 
        
        <Analyze />




      </div>
    );
  }
}

export default App;
