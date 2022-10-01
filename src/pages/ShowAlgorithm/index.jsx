import React from "react";
import { useParams, useMatch } from "react-router-dom";
import { GlobalStyle } from "../../styles";

const ShowAlgorithm = () => {
  const { algorithmId } = useParams();

  return (
    <>
      <GlobalStyle />
      <h1>Algorithm Page</h1>
    </>
  );
};

export default ShowAlgorithm;
