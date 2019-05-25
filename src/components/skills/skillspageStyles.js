import styled from 'styled-components';

export const Wrap = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  background-color: #fff;
  flex-flow: column nowrap;
  align-items: center;
  z-index: 1;
`;

  export const InnerBox = styled.div`
    // border: 1px solid red;
    width: 100%;

    .heading {
      font-family: 'Source Sans Pro', sans-serif;
      font-size: 24px;
      font-weight: 600;
      color: #949494;
      text-align: center;
      padding: 15px 0 15px 0;
      box-shadow: 0 0 8px #D2D2D2;
    }
  `;