import React from 'react';
import styled from 'styled-components';

// font-family: 'Source Sans Pro', sans-serif;
// font-family: 'Oleo Script', cursive;

export const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(173.16deg, #6FE2F2 0%, #7F4CED 100%);
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

  export const Inner = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
  `;

    export const ContentContainer = styled.div`
      text-align: center;
      margin-bottom: 70px;
        @media(min-width: 1100px) { margin-bottom: 90px;}
    `;

      export const Heading = styled.h1`
        font-family: 'Source Sans Pro', sans-serif;
        font-style: italic;
        font-weight: 300;
        font-size: 40px;
        margin-bottom: 10px;
        color: #fff;
        text-shadow: 0px 4px 6px rgba(0, 0, 0, 0.25);
          @media(min-width: 1100px) {
            font-size: 46px;
            margin-bottom: 12px;
          }
          &:nth-of-type(even) {
            font-family: 'Oleo Script', cursive;
            font-size: 46px;
            text-shadow: 0px 4px 6px rgba(0, 0, 0, 0.15);
              @media(min-width: 1100px) {
                font-size: 54px;
              }
          }
      `;

    export const ButtonContainer = styled.div`
    `;

      export const ButtonText = styled(Heading)`
        font-size: 30px;
          @media(min-width: 1100px) { font-size: 36px; }
      `;

      export const Button = styled.div`
        width: 0; 
        height: 0; 
        border-left: 18px solid transparent;
        border-right: 18px solid transparent;
        border-top: 22px solid #fff;
        margin: 0px auto;
      `;