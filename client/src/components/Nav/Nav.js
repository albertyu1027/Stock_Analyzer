import React from "react";
import './Nav.css';

const Nav = () =>
  <nav className="navbar">
    <div className="container-fluid">
      <div>
          <a href="#home">Home</a>
          <a href="#news">Analyze top Picks</a>
          <a href="#contact">Sentiment</a>
        <br />
        <input className ="search"></input>
        <button type="button">
          <span className="infiltrate">Search/Add to DB</span>
        </button>
      </div>
    </div>
  </nav>;



export default Nav;
