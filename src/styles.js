import styled, { createGlobalStyle } from "styled-components";
import RecoletaRegular from "./fonts/Recoleta-Regular.woff";
import RecoletaBold from "./fonts/Recoleta-Bold.woff";
import RingsideWideBold from "./fonts/Ringside-Wide-Bold.otf";

export const Colors = {
  beige: "#fdefe6",
  black: "#2a1203",
  pink: "#f68393",
  white: "#fff",
};

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Recoleta";
    font-style: normal;
    font-weight: 400;
    src: url(${RecoletaRegular}) format("woff");
  }

  @font-face {
    font-family: "Recoleta";
    font-style: normal;
    font-weight: 600;
    src: url(${RecoletaBold}) format("woff");
  }

  @font-face {
    font-family: "Ringside Wide";
    font-style: normal;
    font-weight: 600;
    src: url(${RingsideWideBold}) format("otf");
  }

  body {
    font-family: "Recoleta", serif;
    /* font-family: "Ringside Wide", sans-serif; */
    font-weight: 400;
    color: ${Colors.black};
    background: ${Colors.beige};
  }
`;

export const P = styled.p`
  margin: 0;
  font-size: 16px;
`;
