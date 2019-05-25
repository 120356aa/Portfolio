import React from 'react';

import Header from '../header/header.js';
import {
  Wrap,
  InnerBox,
} from './skillspageStyles.js';

const Skills = () => {
  return( 
    <Wrap>
      <Header />
      <InnerBox>
        <div className="heading">My Skills</div>
      </InnerBox>
    </Wrap>
  );
};

export default Skills;