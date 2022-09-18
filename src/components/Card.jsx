import React from "react";
import { Link } from "react-router-dom";
import * as Styled from "./component-styles";
import * as Global from "../styles";

const Card = ({ algo }) => {
  return (
    <Styled.CardElement>
      <h3>
        <Link to={`algorithms/${algo.id}`}>{algo.title}</Link>
      </h3>
      <Global.P>{algo.description}</Global.P>
      <p>Difficulty: {algo.difficulty}</p>
      <p>Category: {algo.category}</p>
    </Styled.CardElement>
  );
};

export default Card;
