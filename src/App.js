import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import UserSignup from './containers/user/signup/signup';
import store from './redux/store';
import Signout from './containers/user/signout/signout';
import Notfound from './NotFound';
import Signin from './containers/user/signin/Signin';
import SocialLogin from './containers/user/social/SocialAuthLogin';
import Dashboard from './views/Dashboard/index';
import './assets/css/App.scss';

const App = () => (
  <Provider store={store}>
    <Router>
      <div className="container">
        <Switch>
          <Route path="/signup" exact component={UserSignup} />
          <Route path="/signin" exact component={Signin} />
          <Route path="/social/auth/success" exact component={SocialLogin} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/signout" exact component={Signout} />
          <Route component={Notfound} />
        </Switch>
      </div>
    </Router>
  </Provider>
);

export default App;
