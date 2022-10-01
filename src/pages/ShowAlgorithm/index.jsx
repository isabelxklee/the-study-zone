import React from "react";
import { GlobalStyle } from "../../styles";
import * as Global from "../../styles";

const ShowAlgorithm = ({ algo }) => {
  console.log(algo);
  return (
    <Global.Wrapper>
      <GlobalStyle />
      <Global.H1>{algo.name}</Global.H1>
      <Global.P>{algo.description}</Global.P>
      <Global.TagsContainer>
        <Global.Tag $primary $opacity={true}>
          {algo.difficulty.name}
        </Global.Tag>
        <Global.Tag $opacity={true}>{algo.category.name}</Global.Tag>
      </Global.TagsContainer>
    </Global.Wrapper>
  );
};

export default ShowAlgorithm;
