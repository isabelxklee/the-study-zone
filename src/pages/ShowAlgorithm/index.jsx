import React from "react";
import ReactMarkdown from "react-markdown";
import ScrollToTop from "../../components/ScrollToTop";
import { GlobalStyle } from "../../styles";
import * as Global from "../../styles";

const ShowAlgorithm = ({ algo }) => {
  return (
    <>
      <ScrollToTop />
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
        <Global.Spacer>
          <Global.H3>My Solution</Global.H3>
          <ReactMarkdown>{algo.solution}</ReactMarkdown>
        </Global.Spacer>
      </Global.Wrapper>
    </>
  );
};

export default ShowAlgorithm;
