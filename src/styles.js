import styled, { createGlobalStyle } from "styled-components";
import RecoletaRegular from "./fonts/Recoleta-Regular.woff";
import RecoletaBold from "./fonts/Recoleta-Bold.woff";
import RingsideWideBold from "./fonts/Ringside-Wide-Bold.otf";
import { Link } from "react-router-dom";

export const Colors = {
  beige: "#fdefe6",
  tan: "#c86c37",
  black: "#2a1203",
  pink: "#f68393",
  white: "#fff",
  blue: "#2D6AD2",
  navy: "#0e1c3d",
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
    font-weight: 400;
    color: ${Colors.black};
    background: ${Colors.beige};
  }
`;

export const Wrapper = styled.div`
  padding: 120px;

  @media (max-width: 800px) {
    padding: 40px 20px;
  }
`;

export const H1 = styled.h1`
  font-size: 60px;
  font-weight: 600;
  margin: 20px 0;
  line-height: 1;
`;

export const H2 = styled.h2`
  font-size: 32px;
  font-weight: 600;
  margin: 8px 0;
`;

export const H3 = styled.h3`
  font-size: 24px;
  font-weight: 600;
  margin: 8px 0;
`;

export const P = styled.p`
  margin: 0;
  font-size: 16px;
  margin: 8px 0;
`;

export const InternalLink = styled(Link)`
  color: ${Colors.black};
  text-decoration: none;
  font-size: 24px;
`;

export const Tag = styled.button`
  border-radius: 100px;
  background: ${(props) => (props.$primary ? Colors.tan : Colors.blue)};
  color: ${Colors.white};
  padding: 8px 16px;
  width: fit-content;
  border: none;
  font-family: "Recoleta", serif;
  font-size: 16px;
  cursor: ${(props) => (props.$clickable ? "pointer" : "default")};
  opacity: ${(props) => (props.$opacity ? 1 : 0.5)};
  transition: 0.3s;
`;

export const TagsContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 16px;
  align-items: baseline;
  flex-wrap: wrap;
`;

export const Spacer = styled.div`
  margin: 60px 0;
`;
