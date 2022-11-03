import styled from "styled-components";

export const TabItemButton = styled.button`
    background-color: ${ props => props.background || 'white' };
    width: 80%;
    color: white;
    border-style: none;
    border-radius: 4px;

    :hover {
        background-color: ${ props => props.hover || 'white' };
    }
`;
