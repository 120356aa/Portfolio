import styled from 'styled-components';
import { colors, fonts, media } from '../../variables.js';

export const Wrap = styled.div`
  background-color: ${colors.white};
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

  export const InnerBox = styled.div`
    width: 100%;

    .heading {
      font-family: ${fonts.primary};
      color: ${colors.heading};
      box-shadow: 0 0 8px ${colors.shadow};
      font-size: 26px;
      font-weight: 600;
      text-align: center;
      padding: 15px 0 15px 0;
      z-index: 2;
      position: relative;
        ${media.tablet} {
          font-size: 28px;
          padding: 18px 0 18px 0;
        }
        ${media.desktop} {
          font-size: 30px;
          padding: 20px 0 20px 0;
        }
    }

    section {
      width: 100%;
      position: relative;
      z-index: 1;
        ${media.tablet} {
          display: flex;
          flex-flow: row nowarp;
          justify-content: center;
        }

      .card {
        width: 100%;
        padding: 45px 0 45px 0;
          &:nth-child(odd) {
            background-color: ${colors.egg};
              ${media.tablet} { background-color: ${colors.white}; }
          }
          
          ${media.mobile} {
            padding: 55px 0 55px 0;
          }
          ${media.tablet} {
            width: 42%;
            padding: 90px 0 0 0;
          }
          ${media.desktop} {
            width: 460px;
            padding: 100px 0 0 0;
          }
          ${media.large} {
            width: 500px;
            padding: 110px 0 20px 0;
          }

        .cardHeading {
          display: flex;
          justify-content: center;
          align-items: center;

          div{
            margin-right: 15px;
              ${media.tablet} {
                box-shadow: 0 0 6px ${colors.shadow};
                padding: 15px;
                border-radius: 50%;
              }

            img {
              width: 38px;
              height: 38px;
            }
          }

          h3 {
            font-family: ${fonts.primary};
            color: ${colors.PHeading};
            font-size: 19px;
            font-weight: 600;
              ${media.tablet} {
                font-size: 22px;
                color: ${colors.heading};
                font-weight: 400;
              }
              ${media.desktop} { font-size: 24px; }
              ${media.large} { font-size: 26px; }
          }
        }

        p {
          color: ${colors.P};
          font-family: ${fonts.primary};
          font-weight: 300;
          text-align: center;
          font-size: 16px;
          width: 270px;
          margin: 0px auto;
          margin-top: 28px;
          line-height: 21px;
            ${media.tablet} {
              font-size: 17px;
              line-height: 22px;
            }
            ${media.desktop} {
              font-size: 18px;
              line-height: 24px;
              width: 300px;
            }
            ${media.large} {
              font-size: 19px;
              line-height: 26px;
              width: 340px;
            }
        }
      }
    }
  `;