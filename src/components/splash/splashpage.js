import React from 'react';
import { Link } from 'react-router-dom';

import {
  Wrap,
  Inner,
  ContentContainer,
  StartButton,
} from './splashpageStyles.js';

function SplashPage() {
  return (
    <Wrap>
      <Inner>
        <ContentContainer>
          <h1>Hi, my name is</h1>
          <h1>Andrey Yurlov</h1>
          <h1>welcome to my</h1>
          <h1>Portfolio</h1>
        </ContentContainer>

        <StartButton to="/nav">
          <h4>Start</h4>
          <div />
        </StartButton>
      </Inner>
    </Wrap>
  );
};

export default SplashPage;