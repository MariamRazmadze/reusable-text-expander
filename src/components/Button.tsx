import styled from "styled-components";

export const Button = styled.button<{ color: string }>`
  background: none;
  border: none;
  font: inherit;
  cursor: pointer;
  margin-left: 6px;
  color: ${(props) => props.color};
`;
