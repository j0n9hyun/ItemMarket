import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import NotFound from './components/Error';
import Home from './components/Home';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <RecoilRoot>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route component={NotFound} />
          </Switch>
        </RecoilRoot>
      </Router>
    </HelmetProvider>
  );
}

export default App;
