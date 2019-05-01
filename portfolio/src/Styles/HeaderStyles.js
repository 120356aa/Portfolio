import styled from 'styled-components';
import LinkedinOff from '../Resources/linkedin-off.png';
import LinkedinOn from '../Resources/linkedin-on.png';
import GithubOff from '../Resources/github-off.png';
import GithubOn from '../Resources/github-on.png';

export const HeaderWrap = styled.div`
  width: 100%;
`;

export const HeaderW = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  z-index: 2;
  @media (min-width: 500px) {
    // justify-content: space-between;
  }
    @media (min-width: 1000px) {
      width: 1000px;
      margin: 0px auto;
    }
`;

  export const Menu = styled.div`
    display: none;
    justify-content: center;
    align-items: center;
    order: 2;
    text-shadow: 0px 1px 4px #5F5F5F;

      @media (min-width: 500px) {
        display: flex;
        margin-top: 22px;
        // margin-left: 1px;
      }

      @media (min-width: 700px) {
        // padding: 5px 0 0 12px;
      }

      @media (min-width: 900px) { } 
  `;

    export const NavA = styled.a`
      color: #ffffff;
      padding: 0 10px 0 10px;
      text-decoration: none;
      font-family: 'Open Sans', sans-serif;
      font-size: 16px;
      font-weight: 600;

        &:hover { color: #34D4E0; }

        @media (min-width: 500px) {  }

        @media (min-width: 700px) {
          padding: 0 16px 0 16px;
        }
    `;

  export const SLinkBox = styled.div`
    display: flex;
    flex-flow: row nowrap;
    margin: 14px 0 0 18px;
    order: 1;

      @media (min-width: 500px) {
        margin: 18px 0 0 18px;
      }

      @media (min-width: 700px) { 
        margin: 22px 8px 0 0;
      }

      // @media (min-width: 900px) { margin: 0px 10px 0 0; }
  `;

    export const Linkedin = styled.div`
      width: 30px;
      height: 30px;
      cursor: pointer;
      background-image: url(${LinkedinOff});
      margin: 0 14px 0 0;

        &:hover { background-image: url(${LinkedinOn}); }
    `;

    export const Github = styled(Linkedin)`
      background-image: url(${GithubOff});
      margin-top: 1px;

        &:hover { background-image: url(${GithubOn}); }
    `;