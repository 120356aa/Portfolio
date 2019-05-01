import React from 'react';
import { Link } from 'react-router-dom'; 
import styled, { keyframes } from 'styled-components';

// font-family: 'Source Sans Pro', sans-serif;
// font-family: 'Oleo Script', cursive;

const slideInTop = keyframes`
  from {
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
`;

const slideOutTop = keyframes`
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
  height: 100%;
  position: absolute;
  background: linear-gradient(170deg, #6BDBEA 0%, #7F4CED 100%);
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

    &.page-enter { animation: ${slideInTop} 0.3s forwards; }
    &.page-exit { animation: ${slideOutTop} 0.3s forwards; }
`;

  export const Inner = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;

      a { text-decoration: none; }
  `;

    export const ContentContainer = styled.div`
      text-align: center;
      margin-bottom: 70px;
        @media(min-width: 1100px) { margin-bottom: 90px;}

        h1 {
          font-family: 'Source Sans Pro', sans-serif;
          font-style: italic;
          font-weight: 300;
          font-size: 40px;
          margin-bottom: 10px;
          color: #fff;
          text-shadow: 0px 4px 6px rgba(0, 0, 0, 0.25);
            &:nth-of-type(even) {
              font-family: 'Oleo Script', cursive;
              font-size: 46px;
              text-shadow: 0px 4px 6px rgba(0, 0, 0, 0.15);
                @media(min-width: 1100px) {
                  font-size: 54px;
                }
            }

            @media(min-width: 1100px) {
              font-size: 46px;
              margin-bottom: 12px;
            }
        }
    `;

    export const StartButton = styled(Link)`
      text-decoration: none;

        h4 {
          font-family: 'Source Sans Pro', sans-serif;
          font-style: italic;
          font-weight: 300;
          font-size: 30px;
          margin-bottom: 10px;
          color: #fff;
          text-shadow: 0px 4px 6px rgba(0, 0, 0, 0.25);
            @media(min-width: 1100px) { font-size: 36px; }
        }

        div {
          width: 0; 
          height: 0; 
          border-left: 18px solid transparent;
          border-right: 18px solid transparent;
          border-top: 22px solid #fff;
          margin: 0px auto;
        }
    `;