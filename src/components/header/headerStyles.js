import styled from 'styled-components';
import { Link } from 'react-router-dom'; 

export const Wrap = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid red;
  position: absolute;
`;

  export const Inner = styled.div`
    padding: 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: linear-gradient(170deg, #6BDBEA 0%, #7F4CED 100%);

      .logo {
        font-family: 'Oleo Script', cursive;
        font-size: 30px;
        color: #fff;
      }

      .menu {
        .menu_box {
          border: 2px solid #fff;
          margin: 6px 0 6px 0;
          width: 30px;
        }
      }
  `;