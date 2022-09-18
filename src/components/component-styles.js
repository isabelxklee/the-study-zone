import styled from "styled-components";

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  padding: 120px;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

export const CardElement = styled.div`
  border-radius: 8px;
  border: 1px solid #000;
  padding: 16px;
  filter: drop-shadow(0 0 6px rgb(0, 0, 0, 0.2));
  background: #fff;
`;
