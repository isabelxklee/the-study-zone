import styled from "styled-components";
import * as Global from "../styles";

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin: 40px 0;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    padding: 40px 0;
  }
`;

export const CardElement = styled.div`
  border-radius: 8px;
  padding: 16px 32px;
  filter: drop-shadow(0 0 6px rgb(235, 143, 171, 0.6));
  background: ${Global.Colors.white};
`;
