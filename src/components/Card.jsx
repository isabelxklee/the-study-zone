import React from "react";
import * as Styled from "./component-styles";
import * as Global from "../styles";

const Card = ({ algo }) => {
  return (
    <Styled.CardElement>
      <h3>
        <Global.InternalLink to={`algorithms/${algo.id}`}>
          {algo.title}
        </Global.InternalLink>
      </h3>
      <Global.P>{algo.description}</Global.P>
      <Global.TagsContainer>
        <Global.Tag primary>
          <Global.P>{algo.difficulty}</Global.P>
        </Global.Tag>
        <Global.Tag>
          <Global.P>{algo.category}</Global.P>
        </Global.Tag>
      </Global.TagsContainer>
    </Styled.CardElement>
  );
};

export default Card;
