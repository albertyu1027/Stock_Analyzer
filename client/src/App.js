import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Analyze from "./pages/Analyze";
import Fundamentals from "./pages/Fundamentals";
import Sentiment from "./pages/Sentiment";

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Analyze} />
        <Route exact path="/Fundamentals" component={Fundamentals} />
        <Route exact path="/Sentiment" component={Sentiment} />
      </Switch>
    </div>
  </Router>
);

<div className="App">
  <Analyze />
</div>;

export default App;
