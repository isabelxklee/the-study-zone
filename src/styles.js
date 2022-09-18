import styled, { createGlobalStyle } from "styled-components";
import RecoletaRegular from "./fonts/Recoleta-Regular.otf";

export const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: "Recoleta";
    font-style: normal;
    font-weight: 400;
    src: url(${RecoletaRegular}) format("otf");
  }

  body {
    font-family: "Recoleta", serif;
    font-weight: 400;
    color: #000;
    background: #fff;
  }
`;

export const P = styled.p`
  margin: 0;
  font-size: 16px;
`;
