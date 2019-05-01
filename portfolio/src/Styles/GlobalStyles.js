import styled from 'styled-components';
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600');
    font-family: 'Open Sans', sans-serif;

    @import url('https://fonts.googleapis.com/css?family=Montserrat:300,300i,400,400i');
    font-family: 'Montserrat', sans-serif;
  }
`

export const Site = styled.div`
  width: 100%;
`