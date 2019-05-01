import React, { createContext, useContext } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import LoadingPage from './components/loading/loading.js';
import SplashPage from './components/splash/splashpage.js';
import Nav from './components/nav/nav.js';

import BigImg from './assets/image.jpg';
import { Wrap } from './appStyles.js';

import Context from './components/context.js';

class App extends React.Component {
  state = { isLoading: true }

  componentDidMount() {
    // const img = new Image();
    // img.src = BigImg;

    // img.onload = () => {
      // setTimeout(() => {
        this.setState({ isLoading: false });
      // }, 0);
    // }
  }

  render() {
    return (
      <>
        {this.state.isLoading ? <LoadingPage/> : (
          <Context.Provider value={this.state.isLoading}>
            <Route render={({ location }) => {
              return (
                <Wrap>
                  <TransitionGroup component={null}>
                    <CSSTransition timeout={400} classNames="page" key={location.key}>
                      <Switch location={location}>
                        <Route exact path="/" component={SplashPage} />
                        <Route exact path="/nav" component={Nav} />
                      </Switch>
                    </CSSTransition>
                  </TransitionGroup>
                </Wrap>
              );
            }}/>
          </Context.Provider>
        )}
      </>
    );
  }
}

export default App;
