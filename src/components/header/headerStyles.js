import styled from 'styled-components';
import { colors, fonts, media } from '../../variables.js';

export const Wrap = styled.div`
  width: 100%;
  z-index: 3;
`;

  export const Inner = styled.div`
    padding: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: linear-gradient(170deg, ${colors.secondary} 0%, ${colors.primary} 100%);
      ${media.mobile} { padding: 14px; }
      ${media.tablet} { padding: 16px; }

      .logo {
        font-family: ${fonts.secondary};
        font-size: 26px;
        color: ${colors.white};
          ${media.mobile} { font-size: 30px; }
      }

      .menu {
        .menu_box {
          border: 2px solid ${colors.white};
          margin: 5px 0 5px 0;
          width: 26px;
            ${media.mobile} { margin: 6px 0 6px 0; }
            ${media.tablet} { width: 30px; }
        }
      }
  `;