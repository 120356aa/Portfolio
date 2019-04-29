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
    border: 1px solid red;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
  `;

    export const ContentContainer = styled.div`
      border: 1px solid blue;
    `;

    export const ButtonContainer = styled.div`
      border: 1px solid green;
    `;