import React from 'react';

import {
  Wrap,
  Inner,
  ContentContainer,
  ButtonContainer,
  Heading,
  ButtonText,
  Button,
} from './splashpageStyles.js';

function SplashPage() {
  return (
    <Wrap>
      <Inner>
        <ContentContainer>
          <Heading>Hi, my name is</Heading>
          <Heading>Andrey Yurlov</Heading>
          <Heading>welcome to my</Heading>
          <Heading>Portfolio</Heading>
        </ContentContainer>

        <ButtonContainer>
          <ButtonText>Start</ButtonText>
          <Button />
        </ButtonContainer>
      </Inner>
    </Wrap>
  );
};

export default SplashPage;