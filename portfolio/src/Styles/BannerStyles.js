import styled from 'styled-components';
import BG from '../Resources/banner.svg';

export const BannerWrap = styled.div`
  width: 100%;
  height: 108vh;
  margin-top: -60px;
  background: url('${BG}');
  background-size: cover;
  z-index: 1;
    @media (min-width: 500px) { margin-top: -70px; }
`;