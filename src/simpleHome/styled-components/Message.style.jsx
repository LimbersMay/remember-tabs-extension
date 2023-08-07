import styled from "styled-components";

export const Message = styled.div`
    font-weight: bold;
    color: ${props => props.color || 'black'};
    text-align: center;
`
