import React from "react";
import "./Card.css";

const Card = props => (
  <div className="col-3">
    <div className="card shadow">
      <img
        className="card-img-top"
        alt={props.name}
        src={props.image}
        onClick={() => props.clickImage(props.id)}
      />
    </div>
  </div>
);

export default Card;
