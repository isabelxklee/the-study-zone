import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Recoleta";
    src: url("./fonts/Recoleta-Regular.otf") format("otf");
  }

  body {
    font-family: "Recoleta", serif;
    color: #000;
    background: #fff;
  }
`;

export const P = styled.p`
  margin: 0;
  font-size: 16px;
`;
