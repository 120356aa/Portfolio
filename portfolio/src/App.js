import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import { GlobalStyles } from './Styles/GlobalStyles';
import { Site } from './Styles/index';
import 'reset-css';

import Header from './Components/Header/Header';
import Banner from './Components/Banner/Banner';


class App extends Component {
  render() {
    return (
      <Site>
        <GlobalStyles/>
        <Header />
        <Banner />
        {/* <Footer /> */}
      </Site>
    );
  }
}

export default App;
