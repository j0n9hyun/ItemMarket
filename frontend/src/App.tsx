import { Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import NotFound from './components/Error';
import Home from './components/Home';
import Loading from './components/Loading';
import Login from './components/Login';
import Market from './components/Market';
import MarketArticle from './components/Market/MarketArticle';
import Profile from './components/Profile';
import Register from './components/Register';
import Write from './components/Write';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <RecoilRoot>
          <Suspense fallback={<Loading />}>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/market/:id' component={MarketArticle} />
              <Route path='/market' component={Market} />
              <Route path='/profile' component={Profile} />
              <Route path='/login' component={Login} />
              <Route path='/register' component={Register} />
              <Route path='/write' component={Write} />
              <Route component={NotFound} />
            </Switch>
          </Suspense>
        </RecoilRoot>
      </Router>
    </HelmetProvider>
  );
}

export default App;
