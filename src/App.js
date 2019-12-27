import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import UserSignup from './containers/user/signup/signup';
import store from './redux/store';
import Signout from './containers/user/signout/signout';
import Notfound from './NotFound';
import Demo from './components/Demo';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="container">
          <Switch>
            <Route path="/" exact component={Demo} />
            <Route path="/signup" exact component={UserSignup} />
            <Route path="/signout" exact component={Signout} />
            <Route component={Notfound} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
