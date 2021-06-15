import { Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import NotFound from './components/Error';
import Home from './components/Home';
import Loading from './components/Loading';
import Login from './components/Login';
import Logout from './components/Logout';
import Market from './components/Market';
import MarketArticle from './components/Market/MarketArticle';
import Profile from './components/Profile';
import Register from './components/Register';
import Write from './components/Write';
import Auth from './components/hoc/Auth';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <RecoilRoot>
          <Suspense fallback={<Loading />}>
            <Switch>
              <Route path='/' exact component={Auth(Home, null)} />
              <Route path='/market/:id' component={Auth(MarketArticle, true)} />
              <Route path='/market' component={Auth(Market, true)} />
              <Route path='/profile' component={Auth(Profile, true)} />
              <Route path='/login' component={Auth(Login, false)} />
              <Route path='/logout' component={Auth(Logout, true)} />
              <Route path='/register' component={Register} />
              <Route path='/write' component={Auth(Write, true)} />
              <Route component={NotFound} />
            </Switch>
          </Suspense>
        </RecoilRoot>
      </Router>
    </HelmetProvider>
  );
}

export default App;
