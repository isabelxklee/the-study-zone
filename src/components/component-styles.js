import styled from "styled-components";
import * as Global from "../styles";

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-top: 16px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    padding: 40px 0;
  }
`;

export const CardElement = styled.div`
  border-radius: 8px;
  padding: ${(props) => (props.emptyState ? "40px" : "16px 32px")};
  margin: ${(props) => (props.emptyState ? "40px 0" : "0")};
  filter: drop-shadow(0 0 6px rgb(235, 143, 171, 0.6));
  background: ${Global.Colors.white};
`;

export const NavContainer = styled.div`
  display: flex;
  gap: 32px;
  justify-content: center;
  margin-top: 40px;
`;
