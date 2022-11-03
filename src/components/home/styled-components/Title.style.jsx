import styled from "styled-components";

export const Title = styled.h4`
    color: white;
    font-weight: bold;
    
    font-size: ${ props => props.fontSize || 15 };
`;