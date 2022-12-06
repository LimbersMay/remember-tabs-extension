import styled from "styled-components";

export const Button = styled.button`
  width: 130px;
  height: 25px;
  border-style: none;
  border-radius: 5px;
  color: white;
  background-color: ${props => props.background || 'white'};
  
  :hover {
    background-color: ${props => props.hover || 'white'};
  }
`;
