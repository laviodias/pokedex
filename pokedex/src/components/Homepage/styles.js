import styled from "styled-components";

export const MainContainer = styled.section`
  width: 60vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
  gap: 24px;

  @media (max-width: 1024px) {
    width: 80vw;
  }
  
  @media (max-width: 768px) {
    width: 90vw;
  }
`;

export const CardsContainer = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
`;
