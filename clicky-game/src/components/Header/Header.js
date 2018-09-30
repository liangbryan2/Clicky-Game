import React from "react";
import "./Header.css";

const Header = props => (
  <div className="jumbotron">
    <h1 className="display-4">Clicker Memory Game</h1>
    <p className="lead">
      To earn a point, click on an image you have yet to click on. The highest
      amount of points you can get is 12. Good Luck!
    </p>
    <hr className="my-4" />
    <div className="row">
      <p className="col-6">
        Current Score: <span>{props.current}</span>
      </p>
      <p className="col-6">
        Highest Score: <span>{props.highest}</span>
      </p>
    </div>
  </div>
);

export default Header;
