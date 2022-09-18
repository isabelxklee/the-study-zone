import styled from "styled-components";

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  padding: 120px 180px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    padding: 40px 80px;
  }
`;

export const CardElement = styled.div`
  border-radius: 8px;
  padding: 16px 32px;
  filter: drop-shadow(0 0 6px rgb(235, 143, 171, 0.6));
  background: #fff;
`;
