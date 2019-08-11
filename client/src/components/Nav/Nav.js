import React from "react";
import './Nav.css';

const Nav = () =>
  <nav className="navbar">
    <div className="container-fluid">
      <div>
          <a href="/">Home</a>
          <a href="Fundamentals">Analyze top Picks</a>
          <a href="Sentiment">Sentiment</a>
        <br />
        <input className ="search"></input>
        <button type="button">
          <span className="infiltrate">Search/Add to DB</span>
        </button>
      </div>
    </div>
  </nav>;



export default Nav;
