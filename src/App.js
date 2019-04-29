import React from 'react';
import { Route } from 'react-router-dom';

import SplashPage from './components/splash/splashpage.js';

function App() {
  return (
    <div>
      <Route path="/" component={SplashPage} />
    </div>
  );
}

export default App;
