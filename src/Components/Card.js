import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <>
      <div className="card">
        <h1>Animated Card</h1>
        <p>${props.content}</p>
      </div>
    </>
  );
}
export default Card;
