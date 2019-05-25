import styled from 'styled-components';
import { Link } from 'react-router-dom'; 

export const Wrap = styled.div`
  width: 100%;
  z-index: 2;
`;

  export const Inner = styled.div`
    padding: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: linear-gradient(170deg, #6BDBEA 0%, #7F4CED 100%);
      @media(min-width: 600px) { padding: 14px; }
      @media(min-width: 900px) { padding: 16px; }

      .logo {
        font-family: 'Oleo Script', cursive;
        font-size: 26px;
        color: #fff;
          @media(min-width: 600px) { font-size: 30px; }
      }

      .menu {
        .menu_box {
          border: 2px solid #fff;
          margin: 5px 0 5px 0;
          width: 26px;
            @media(min-width: 600px) { margin: 6px 0 6px 0; }
            @media(min-width: 900px) { width: 30px; }
        }
      }
  `;