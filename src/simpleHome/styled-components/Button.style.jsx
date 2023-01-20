import styled from "styled-components";

export const Button = styled.button`
  width: 120px;
  height: 50px;
  border-style: none;
  margin: 3px;
  background-color: ${props => props.background || 'white'};
  color: white;
  border-radius: 5px;
  
  :hover {
    background-color: ${props => props.hoverColor};
  }
`
