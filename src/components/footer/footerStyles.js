import styled from 'styled-components';
import { colors, fonts, media } from '../../variables.js';

export const Wrap = styled.div`
  width: 100%;
  padding: 15px 0 15px 0;
  box-shadow: 0 0 8px ${colors.shadow};
  z-index: 2;
  position: fixed;
  bottom: 0;
  background-color: ${colors.white};
    // ${media.tablet} { padding: 18px 0 18px 0; }
    // ${media.desktop} { padding: 20px 0 20px 0; }
`;

  export const Inner = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;

    a {
      &:nth-child(2) {
        padding: 0 12px 0 12px;
          ${media.mobile} { padding: 0 15px 0 15px; }
          ${media.desktop} { padding: 0 18px 0 18px; }
      }

      img {
        width: 36px;
        height: 36px;
        opacity: 0.6;
          &:hover { opacity: 1; }
  
          ${media.desktop} {
            width: 42px;
            height: 42px;
          }
      }
    }

    img {
      width: 36px;
      height: 36px;
      opacity: 0.6;
      cursor: pointer;
        &:hover { opacity: 1; }

        ${media.desktop} {
          width: 42px;
          height: 42px;
        }
    }
  `;

export const Contact = styled.div`
  width: 320px;
  height: 360px;
  background-color: ${colors.white};
  box-shadow: 0 0 200px 60px ${colors.heading};
  z-index: 2;
  position: fixed;
  top: 27%;
    ${media.mobile} {
      top: 25%;
      width: 400px;
      height: 440px;
    }
    ${media.tablet} {
      top: 20%;
      width: 500px;
      height: 500px;
    }
    ${media.desktop} {
      top: 13%;
      width: 640px;
      height: 640px;
    }
    ${media.large} {
      width: 1000px;
    }
`;

