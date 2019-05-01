import React from 'react';
import { Link } from 'react-router-dom';

import {
  Wrap,
  Inner,
  ContentContainer,
  ButtonText,
  Button,
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

        <Link to="/nav">
          <ButtonText>Start</ButtonText>
          <Button />
        </Link>
      </Inner>
    </Wrap>
  );
};

export default SplashPage;