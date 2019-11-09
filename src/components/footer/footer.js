import React, { useState } from 'react';

import Github from '../../assets/github.svg';
import Linkedin from '../../assets/linkedin.svg';
import Email from '../../assets/email.svg';

import {
  Wrap,
  Inner,
  Contact,
} from './footerStyles.js';

const Footer = () => {
  const [contVis, setContVis] = useState(false);

  const toggleContact = () => {
    setContVis(!contVis); 
  }

  return (
    <>
      <Wrap>
        <Inner>
          <a href="https://github.com/120356aa" target="_blank"><img src={Github} /></a>
          <a href="https://www.linkedin.com/in/andrew-yurlov-51b3b8150/" target="_blank"><img src={Linkedin} /></a>
          {/* <img src={Email} onClick={toggleContact} /> */}
        </Inner>
      </Wrap>

      {contVis ? (
        <Contact>
        </Contact>
      ) : null }
    </>
  )
}

export default Footer;