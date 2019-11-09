import React, { useState, useEffect } from 'react';
import { Route, Link, Switch, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import LoadingPage from './components/loading/loading.js';
import SplashPage from './components/splash/splashpage.js';
import Nav from './components/nav/nav.js';
import Skills from './components/skills/skillspage.js';
import Portfolio from './components/portfolio/portfolio';

import { Wrap } from './appStyles.js';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Loading();
  }, []);

  const Loading = () => {
    setTimeout(() => {
      setLoading(false);
    }, 0);
  };

  return (
    <>
      {loading ? <LoadingPage/> : (
        <Route render={({ location }) => {
          return (
            <Wrap>
              <TransitionGroup component={null}>
                <CSSTransition timeout={400} classNames="page" key={location.key}>
                  <Switch location={location}>
                    <Route exact path="/" component={SplashPage} />
                    <Route exact path="/nav" component={Nav} />
                    <Route exact path="/skills" component={Skills} />
                    <Route exact path="/portfolio" component={Portfolio} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            </Wrap>
          );
        }}/>
      )}
    </>
  )
}

export default withRouter(App);
