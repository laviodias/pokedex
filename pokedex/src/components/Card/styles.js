import styled from "styled-components";
import { getCardBgColor, getTypeBgColor } from "../../assets/js/utils";

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  background-color: ${(props) => getCardBgColor(props.type) || "#fff"};
  width: 30%;
  border-radius: 16px;
  min-width: 250px;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
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

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalBg = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 80%;
  background-color: #fff;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
