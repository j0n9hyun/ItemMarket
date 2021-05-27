import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import NotFound from './components/Error';
import Home from './components/Home';
import Market from './components/Market';
import Profile from './components/Profile';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <RecoilRoot>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/market' exact component={Market} />
            <Route path='/profile' exact component={Profile} />
            <Route component={NotFound} />
          </Switch>
        </RecoilRoot>
      </Router>
    </HelmetProvider>
  );
}

export default App;
