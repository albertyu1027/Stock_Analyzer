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

// <img src={logo} className="App-logo" alt="logo" />

  render() {
    return (
      <div className="App">
        <br />
        <br />

        <Analyze />

      </div>
    );
  }
}

export default App;
