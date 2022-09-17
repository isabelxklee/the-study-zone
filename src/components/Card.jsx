import React from "react";
import { Link } from "react-router-dom";

const Card = ({ algo }) => {
  return (
    <div>
      <h3>
        <Link to={`algorithms/${algo.id}`}>{algo.title}</Link>
      </h3>
      <p>{algo.description}</p>
      <p>Difficulty: {algo.difficulty}</p>
      <p>Category: {algo.category}</p>
    </div>
  );
};

export default Card;
