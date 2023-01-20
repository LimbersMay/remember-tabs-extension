import styled from "styled-components";

export const TabItems = styled.div`
    width: 100%;
    height: 250px;

    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 3px;

    .transition-enter {
    opacity: 0.01;
    transform: translate(0, -10px);
    }

  .transition-enter-active {
    opacity: 1;
    transform: translate(0, 0);
    transition: all 300ms ease-in;
    }

  .transition-exit {
    opacity: 1;
    transform: translate(0, 0);
    }

  .transition-exit-active {
    opacity: 0.01;
    transform: translate(0, 10px);
    transition: all 300ms ease-in;
    }

    overflow-y: scroll;
`;
