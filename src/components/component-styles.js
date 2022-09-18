import styled from "styled-components";

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

export const CardElement = styled.div`
  border-radius: 8px;
  border: 1px solid #000;
`;
