import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import resetPasswordView from './containers/user/password/resetPassword';
import forgotPasswordView from './views/forgotPasswordView';
import store from './redux/store';
import Signup from './containers/user/signup/signup';
import VerifyEmail from './views/auth/VerifyEmail';
import Signin from './containers/user/signin/signin';
import Notfound from './NotFound';
import SocialLogin from './containers/user/social/SocialAuthLogin';
import Dashboard from './views/Dashboard/index';
import HomePage from './components/HomePage';
import './assets/css/App.scss';

const App = () => (
  <Provider store={store}>
    <Router>
      <div className="container">
        <Switch>
          <Route path="/signin" exact component={Signin} />
          <Route path="/social/auth/success" exact component={SocialLogin} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/dashboard" exact component={VerifyEmail} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/reset-password" exact component={resetPasswordView} />
          <Route path="/forgot-password" exact component={forgotPasswordView} />
          <Route path="/home" exact component={HomePage} />
          <Route component={Notfound} />
        </Switch>
      </div>
    </Router>
  </Provider>
)

export default App;
