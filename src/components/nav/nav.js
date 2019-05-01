import React from 'react';
import { Link } from 'react-router-dom';

import {
  Wrap,
 } from './navStyles.js';

function Nav() {
  return (
    <Wrap>
      <Link to="/">Home</Link>
    </Wrap>
  );
};

export default Nav;