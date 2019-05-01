import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import {
  Wrap,
 } from './navStyles.js';

import Context from '../context.js';

function Nav() {
  const value = useContext(Context);

  return (
    <Wrap>
      <Link to="/">Home</Link>
    </Wrap>
  );
};

export default Nav;