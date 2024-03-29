import styled from 'styled-components';

export const MainButton = styled.button`

    background-color: ${ props => props.background || "gray"};
    
    color: white;
    border-style: none;
    border-radius: 5px;
    font-weight: bold;
    min-width: 70px;
    max-width: 90px;
    padding: 4px;
    min-height: 35px;

    :hover {
        background-color: ${ props => props.hoverColor || '#4A148C'  };
    }
`;
