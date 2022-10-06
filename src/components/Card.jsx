import React from "react";
import * as Styled from "./component-styles";
import * as Global from "../styles";

const Card = ({ algo, setSelectedTag }) => {
  const createSlugs = (str) => {
    str = str.replace(/\s+/g, "-").toLowerCase();
    return str;
  };

  return (
    <Styled.CardElement>
      <Global.InternalLink to={`algorithms/${createSlugs(algo.name)}`}>
        <Global.H3>{algo.name}</Global.H3>
        <Global.P>{algo.description}</Global.P>
      </Global.InternalLink>
      <Global.TagsContainer>
        <Global.Tag
          $opacity={true}
          $clickable
          $background={Global.Colors.blue}
          onClick={() => setSelectedTag(algo.category.name)}
        >
          {algo.category.name}
        </Global.Tag>
        <Global.Tag
          $primary
          $clickable
          $opacity={true}
          $background={Global.Colors.tan}
          onClick={() => setSelectedTag(algo.difficulty.name)}
        >
          {algo.difficulty.name}
        </Global.Tag>
      </Global.TagsContainer>
    </Styled.CardElement>
  );
};

export default Card;
