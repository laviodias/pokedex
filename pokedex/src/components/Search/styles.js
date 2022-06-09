import styled from "styled-components";
import { getTypeBgColor } from "../../assets/js/utils";

export const Input = styled.input`
  padding: 16px 20px;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ccc;
  outline: none;
  font-size: 1.2rem;
  background-color: #f1f5f9;
  border-radius: 8px;
  width: 100%;
`;

export const InputContainer = styled.div`
  width: 100%;
  position: relative;
`;

export const TypesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  justify-content: center;
  margin-top: 16px;
`;

export const TypeStyle = styled.div`
  background-color: ${(props) =>
    props.active ? getTypeBgColor(props.type) : "rgba(0, 0, 0, 0.1)"};
  color: ${(props) => (props.active ? "#000" : "rgba(0, 0, 0, 0.3)")};
  cursor: pointer;
  padding: 8px;
  border-radius: 14px;
  font-size: 1.2rem;
`;
