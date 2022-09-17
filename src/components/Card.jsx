import React from "react";

const Card = ({ title, description }) => {
  return (
    <div>
      <p>{title}</p>
      <p>{description}</p>
    </div>
  );
};

export default Card;
