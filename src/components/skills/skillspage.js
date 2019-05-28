import React from 'react';

import Header from '../header/header.js';
import Footer from '../footer/footer.js';

import imgJS from '../../assets/js.svg';
import imgReact from '../../assets/react.svg';
import imgDatabase from '../../assets/database.svg';
import imgDesign from '../../assets/design.svg';
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
        <section className="first">
          <div className="card">
            <div className="cardHeading">
              <div><img src={imgJS}/></div>
              <h3>Javascript</h3>
            </div>
            <p>
              Intermediat skill in ES6 and higher Javascript. 
              Over a year of experience writing both frontend and backend
              applications.
            </p>
          </div>
          <div className="card">
            <div className="cardHeading">
              <div><img src={imgReact} /></div>
              <h3>Front End</h3>
            </div>
            <p>
              Advanced skill in front end development using React and all 
              of the major third party dependencies like Redux, Router and more
            </p>
          </div>
        </section>
        <section>
          <div className="card">
            <div className="cardHeading">
              <div><img src={imgDatabase} /></div>
              <h3>Back End</h3>
            </div>
            <p>
              Intermediat skill in back end development using tools like Node, 
              Knex, sqLite3, Postgress as well as SQL.
            </p>
          </div>
          <div className="card last">
            <div className="cardHeading">
              <div><img src={imgDesign} /></div>
              <h3>Design</h3>
            </div>
            <p>
              Eight years of design experiance using LESS/SASS, Photoshop, 
              Illustrator, Figma and more.
            </p>
          </div>
        </section>
      </InnerBox>
      <Footer />
    </Wrap>
  );
};

export default Skills;