import React from "react";
import * as Styled from "./component-styles";
import * as Global from "../styles";

const Card = ({ algo }) => {
  return (
    <Styled.CardElement>
      <Global.H3>
        <Global.InternalLink to={`algorithms/${algo.id}`}>
          {algo.title}
        </Global.InternalLink>
      </Global.H3>
      <Global.P>{algo.description}</Global.P>
      <Global.TagsContainer>
        <Global.Tag primary>{algo.difficulty}</Global.Tag>
        <Global.Tag>{algo.category}</Global.Tag>
      </Global.TagsContainer>
    </Styled.CardElement>
  );
};

export default Card;
