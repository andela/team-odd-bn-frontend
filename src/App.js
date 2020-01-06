import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import resetPasswordView from './containers/user/password/resetPassword';
import forgotPasswordView from './views/forgotPasswordView';
import axios from 'axios';
import store from './redux/store';
import Signup from './containers/user/signup/signup';
import VerifyEmail from './views/auth/VerifyEmail';
import Signin from './containers/user/signin/signin';
import Notfound from './NotFound';
import SocialLogin from './containers/user/social/SocialAuthLogin';
import './assets/css/style.scss';

import TempA from './views/temp/TempA';
import TempB from './views/temp/TempB';

axios.defaults.baseURL = 'https://team-odd-bn-backend-staging.herokuapp.com/api/v1/users';

const App = () => (
  <Provider store={store}>
    <Router>
      <div className="container">
        <Switch>
          <Route path="/signin" exact component={Signin} />
          <Route path="/social/auth/success" exact component={SocialLogin} />
          <Route path="/dashboard" exact component={VerifyEmail} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/reset-password" exact component={resetPasswordView} />
          <Route path="/forgot-password" exact component={forgotPasswordView} />
          <Route path="/dashboard" exact component={VerifyEmail} />
          <Route path="/tempA" exact component={TempA} />
          <Route path="/tempB" exact component={TempB} />
          <Route component={Notfound} />
        </Switch>
      </div>
    </Router>
  </Provider>
)

export default App;
