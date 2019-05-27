import styled from 'styled-components';

export const Wrap = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  background-color: #fff;
  flex-flow: column nowrap;
  align-items: center;
  // z-index: 1;
`;

  export const InnerBox = styled.div`
    // border: 1px solid red;
    width: 100%;

    .heading {
      font-family: 'Source Sans Pro', sans-serif;
      font-size: 26px;
      font-weight: 600;
      color: #949494;
      text-align: center;
      padding: 15px 0 15px 0;
      box-shadow: 0 0 8px #D2D2D2;
      z-index: 2;
      position: relative;
    }

    section {
      width: 100%;
      position: relative;
      z-index: 1;

      .card {
        width: 100%;
        padding: 36px 0 36px 0;
          &:nth-child(odd) {
            background-color: #F5F5F5;
          }

        .cardHeading {
          display: flex;
          justify-content: center;
          align-items: center;

          h3 {
            font-size: 20px;
            font-weight: 400;
            font-family: 'Source Sans Pro', sans-serif;
            color: #797979;
          }
        }

        p {
          text-align: center;
          font-family: 'Source Sans Pro', sans-serif;
          font-weight: 300;
          color: #808080;
          font-size: 16px;
          width: 270px;
          margin: 0px auto;
          margin-top: 28px;
          line-height: 21px;
        }
      }
    }
  `;