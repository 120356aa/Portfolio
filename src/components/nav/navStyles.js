import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { colors, fonts, media } from '../../variables.js';

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

const menuAnimation2 = keyframes`
  from {
    transform: translateY(60%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(170deg, ${colors.white} 0%, ${colors.egg} 100%);
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  z-index: 1;
  position: relative;

    &.page-enter { animation: ${slideInLeft} 0.4s forwards; }
    &.page-exit { animation:${slideOutRight} 0.4s forwards; }
`;

  export const Navigation = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center:
    align-items: center;
      ${media.desktop} { flex-flow: row nowrap; }
  `;

    export const NavItem = styled(Link)`
      display: flex;
      justify-content: flex-start;
      align-items: center;
      opacity: 0;
      text-decoration: none;
        &:hover {
          p:nth-of-type(odd) { color: ${colors.primary} !important; }
        }

        &:nth-child(1) {
          margin-left: -4px;
          animation: ${menuAnimation} 0.2s forwards 0.3s ease-in-out;
            ${media.desktop} {
              animation: ${menuAnimation2} 0.2s forwards 0.3s ease-in-out;
            }

            img {
              width: 64px;
              height: 64px;
                ${media.large} {
                  width: 84px;
                  height: 84px;
                }
            }

            p:nth-of-type(1) {
              font-size: 30px;
              font-family: ${fonts.primary};
              font-weight: bold;
              color: ${colors.black};
                ${media.large} { font-size: 36px; }
            }

            p:nth-of-type(2) { margin: 5px 0 0 0; }
        }

        &:nth-child(2) {
          margin: 50px 0 50px 0;
          animation: ${menuAnimation} 0.2s forwards 0.35s ease-in-out;
            ${media.desktop} {
              margin: 0 86px 0 86px;
              animation: ${menuAnimation2} 0.2s forwards 0.35s ease-in-out;
            }

            ${media.large} { margin: 0 130px 0 130px; }

            p:nth-of-type(1) {
              font-size: 30px;
              font-family: ${fonts.primary};
              font-weight: bold;
              color: ${colors.black};
                ${media.large} { font-size: 36px; }
            }

            p:nth-of-type(2) { margin: 5px 0 0 0; }
        }

        &:nth-child(3) {
          animation: ${menuAnimation} 0.2s forwards 0.4s ease-in-out;
            ${media.desktop} {
              animation: ${menuAnimation2} 0.2s forwards 0.4s ease-in-out;
            }

            p:nth-of-type(1) {
              font-size: 30px;
              font-family: ${fonts.primary};
              font-weight: bold;
              color: ${colors.black};
                ${media.large} { font-size: 36px; }
            }

            p:nth-of-type(2) { margin: 5px 0 0 0; }
        }

        img {
          width: 60px;
          height: 60px;
            ${media.large} {
              width: 80px;
              height: 80px;
            }
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
            font-family: ${fonts.primary};
            font-weight: normal;
            color: ${colors.black};
          }
      `;
      