import React from "react";

const Card = ({ algo }) => {
  return (
    <div>
      <h3>{algo.title}</h3>
      <p>{algo.description}</p>
      <p>Difficulty: {algo.difficulty}</p>
      <p>Category: {algo.category}</p>
    </div>
  );
};

export default Card;
