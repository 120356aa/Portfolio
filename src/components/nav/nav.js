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

const Nav = () => {
  const value = useContext(Context);

  return (
    <Wrap>
      <Navigation>
        <NavItem to="/skills">
          <img src={Skills} />
          <NavText>
            <p>Skills</p>
            <p>My strengths</p>
          </NavText>
        </NavItem>

        <NavItem to="/portfolio">
          <img src={Portfolio} />
          <NavText>
            <p>Portfolio</p>
            <p>All of My Projects</p>
          </NavText>
        </NavItem>

        <NavItem to="/resume">
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