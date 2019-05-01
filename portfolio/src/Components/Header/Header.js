import React, { Component } from 'react';

import { 
  HeaderWrap,
  HeaderW,
  Menu,
  NavA,
  SLinkBox,
  Github,
  Linkedin,
} from '../../Styles/index.js';

class Header extends Component {
  render() {
    return(
      <HeaderWrap>
        <HeaderW>
          <SLinkBox>
            <a target="_blank" href="http://www.linkedin.com">
              <Linkedin></Linkedin>
            </a>
            <a target="_blank" href="http://www.github.com">
              <Github></Github>
            </a>
          </SLinkBox>
          <Menu>
            <NavA href='#banner'>HOME</NavA>
            <NavA href='#portfolio'>PORTFOLIO</NavA>
            <NavA href='#resume'>RESUME</NavA>
          </Menu>
        </HeaderW>
      </HeaderWrap>
    );
  }
}

export default Header;