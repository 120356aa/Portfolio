import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import Skills from '../../assets/skills.svg';
import Portfolio from '../../assets/portfolio.svg';
import Resume from '../../assets/resume.svg';

import {
  Wrap,
  Navigation,
  NavItem,
  NavText,
 } from './navStyles.js';

import Context from '../context.js';

function Nav() {
  const value = useContext(Context);

  return (
    <Wrap>
      <Navigation>
        <NavItem>
          <img src={Skills} />
          <NavText>
            <p>Skills</p>
            <p>Things I'm Good At</p>
          </NavText>
        </NavItem>

        <NavItem>
          <img src={Portfolio} />
          <NavText>
            <p>Portfolio</p>
            <p>All of My Projects</p>
          </NavText>
        </NavItem>
        
        <NavItem>
          <img src={Resume} />
          <NavText>
            <p>Resume</p>
            <p>My Experiences</p>
          </NavText>
        </NavItem>
      </Navigation>
    </Wrap>
  );
};

export default Nav;