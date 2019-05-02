import styled, { keyframes } from 'styled-components';
import { Link, withRouter } from 'react-router-dom';

const slideInLeft = keyframes`
from {
  -webkit-transform: translate3d( 100%, 0, 0);
  transform: translate3d( 100%, 0, 0);
  visibility: visible;
}
to {
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}
`;

const slideOutRight = keyframes`
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  to {
    visibility: hidden;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }
`;

const menuAnimation = keyframes`
  from {
    transform: translateX(30%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(170deg, #fff 0%, #F3F3F3 100%);
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

    &.page-enter { animation: ${slideInLeft} 0.3s forwards; }
    &.page-exit { animation:${slideOutRight} 0.3s forwards; }
`;

  export const Navigation = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center:
    align-items: center;
  `;

    export const NavItem = styled(Link)`
      display: flex;
      justify-content: flex-start;
      align-items: center;
      opacity: 0;
      text-decoration: none;
        &:nth-child(1) {
          animation: ${menuAnimation} 0.2s forwards 0.3s ease-in-out;
          margin-left: -4px;
            img { width: 64px; height: 64px;}
            p:nth-of-type(1) {
              font-size: 30px;
              font-family: 'Source Sans Pro', sans-serif;
              font-weight: bold;
              color: #282828;
            }
            p:nth-of-type(2) {
              margin: 5px 0 0 0;
            }
        }

        &:nth-child(2) {
          animation: ${menuAnimation} 0.2s forwards 0.35s ease-in-out;
            img { margin: 50px 0 50px 0; }
            p:nth-of-type(1) {
              font-size: 30px;
              font-family: 'Source Sans Pro', sans-serif;
              font-weight: bold;
              color: #282828;
            }
            p:nth-of-type(2) {
              margin: 5px 0 0 0;
            }
        }

        &:nth-child(3) {
          animation: ${menuAnimation} 0.2s forwards 0.4s ease-in-out;
            p:nth-of-type(1) {
              font-size: 30px;
              font-family: 'Source Sans Pro', sans-serif;
              font-weight: bold;
              color: #2D2D2D;
            }
            p:nth-of-type(2) {
              margin: 5px 0 0 0;
            }
        }

        img {
          width: 60px;
          height: 60px;
        }
    `;

      export const NavText = styled.div`
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: flex-start;
        margin-left: 22px;
          p {
            font-size: 18px;
            font-family: 'Source Sans Pro', sans-serif;
            font-weight: normal;
            color: #2D2D2D;
          }
      `;
      