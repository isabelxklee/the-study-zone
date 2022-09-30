import React from "react";
import * as Styled from "./component-styles";
import * as Global from "../styles";

const Card = ({ algo, setSelectedTag }) => {
  return (
    <Styled.CardElement>
      <Global.InternalLink to={`algorithms/${algo.id}`}>
        <Global.H3>{algo.name}</Global.H3>
        <Global.P>{algo.description}</Global.P>
      </Global.InternalLink>
      <Global.TagsContainer>
        <Global.Tag
          $primary
          $opacity={true}
          onClick={() => setSelectedTag(algo.difficulty.name)}
        >
          {algo.difficulty.name}
        </Global.Tag>
        <Global.Tag
          $opacity={true}
          onClick={() => setSelectedTag(algo.category.name)}
        >
          {algo.category.name}
        </Global.Tag>
      </Global.TagsContainer>
    </Styled.CardElement>
  );
};

export default Card;
