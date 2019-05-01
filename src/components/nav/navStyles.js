import styled, { keyframes } from 'styled-components';

export const slideInBottom = keyframes`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;

export const slideOutBottom = keyframes`
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }
`;

export const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${props => props.value ? '#fff' : '#fff'};
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

    &.page-enter { animation: ${slideInBottom} 0.2s forwards; }
    &.page-exit { animation: ${slideOutBottom} 0.2s forwards; }
`;