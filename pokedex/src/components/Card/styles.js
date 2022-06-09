import styled from "styled-components";
import { getCardBgColor, getTypeBgColor } from "../../assets/js/utils";

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  background-color: ${(props) => getCardBgColor(props.type) || "#fff"};
  width: 30%;
  border-radius: 16px;
`;

export const Name = styled.h1`
  font-size: 2rem;
`;

export const Type = styled.div`
  background-color: ${(props) => getTypeBgColor(props.type) || "#000"};
  color: #fff;
  padding: 8px;
  border-radius: 16px;
  width: max-content;
  font-size: 1rem;
`;

export const TypesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 4px;
`;
