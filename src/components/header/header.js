import React from 'react';

import { Link } from 'react-router-dom'; 

import {
  Wrap,
  Inner,
} from './headerStyles.js';

const Header = () => {
  return(
    <Wrap>
      <Inner>
        <h1 className="logo">AY</h1>
        <Link to="/nav" className="menu">
          <div className="menu_box"></div>
          <div className="menu_box"></div>
          <div className="menu_box"></div>
        </Link>
      </Inner>
    </Wrap>
  );
};

export default Header;