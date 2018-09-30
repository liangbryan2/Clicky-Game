import React from "react";
import "./Nav.css";

const Nav = props => (
  <nav className="navbar fixed-top navbar-dark bg-dark shadow">
    <div className="container-fluid">
      <p className="col-6"> {props.message}</p>
      <p className="col-6">
        Current Score: <span>{props.current}</span> | Highest Score:{" "}
        <span>{props.highest}</span>
      </p>
    </div>
  </nav>
);

export default Nav;
