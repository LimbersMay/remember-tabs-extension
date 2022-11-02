import styled from 'styled-components';

export const Button = styled.button`

    background-color: ${ props => props.background || "gray"};
    
    color: white;
    border-style: none;
    border-radius: 5px;
    font-weight: bold;
    width: 75px;
    padding: 4px;
    min-height: 35px;
`;
