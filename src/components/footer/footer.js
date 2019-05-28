import React from 'react';

import Github from '../../assets/github.svg';
import Linkedin from '../../assets/linkedin.svg';
import Email from '../../assets/email.svg';

import {
  Wrap,
  Inner,
} from './footerStyles.js';

const Footer = () => {
  return (
    <Wrap>
      <Inner>
        <a href="https://github.com/120356aa" target="_blank"><img src={Github} /></a>
        <a href="https://www.linkedin.com/in/andrew-yurlov-51b3b8150/" target="_blank"><img src={Linkedin} /></a>
        <a href="www.google.com" target="_blank"><img src={Email} /></a>
      </Inner>
    </Wrap>
  )
}

export default Footer;