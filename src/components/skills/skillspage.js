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
        <section>
          <div className="card">
            <div className="cardHeading">
              <h3>Javascript</h3>
            </div>
            <p>Intermediat skill in ES6 + Javascript. This is my primary programming language</p>
          </div>
          <div className="card">
            <div className="cardHeading">
              <h3>Front End</h3>
            </div>
            <p>Advanced skill in front end development using React and all of the major third party dependencies like Redux, Router and more</p>
          </div>
        </section>
        <section>
          <div className="card">
            <div className="cardHeading">
              <h3>Back End</h3>
            </div>
            <p>Intermediat skill in back end development using tools like Node, knex, sqLite as well as a practical understanding of SQL</p>
          </div>
          <div className="card">
            <div className="cardHeading">
              <h3>Design</h3>
            </div>
            <p>Eight years of design experiance using LESS/SASS, Photoshop, Illustrator, Figma and many more.</p>
          </div>
        </section>
      </InnerBox>
    </Wrap>
  );
};

export default Skills;