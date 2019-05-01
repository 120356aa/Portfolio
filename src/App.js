import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import SplashPage from './components/splash/splashpage.js';
import Nav from './components/nav/nav.js';
import { Wrap } from './appStyles.js';

function App() {
  return (
    <div>
      <Route render={({ location }) => {
        return (
          <Wrap>
            <TransitionGroup component={null}>
              <CSSTransition timeout={400} classNames="page" key={location.key}>
                <Switch location={location}>
                  <Route exact path="/nav" component={Nav} />
                  <Route exact path="/" component={SplashPage} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          </Wrap>
        );
      }}/>
    </div>
  );
}

export default App;
