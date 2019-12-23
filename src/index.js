/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from 'react-dom';
import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';
import App from './App';
import Notfound from './NotFound';

const routing = (
  <Router>
    <div>
      <ul>
        <li>
          <NavLink exact activeClassName="active" to="/">
            Home
          </NavLink>
        </li>
      </ul>

      <Switch>
        <Route exact path="/" component={App} />
        <Route component={Notfound} />
      </Switch>
    </div>
  </Router>
)

const rootElement = document.getElementById('app');

render(routing, rootElement);
