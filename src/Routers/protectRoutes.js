import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import verifyToken from '../helpers/verifyToken';

const protectRoutes = ({ component: Component, ...rest }) => {
  const existingToken = window.localStorage.getItem('token');
  const result = verifyToken(existingToken);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (result.isVerified === true) {
          return <Component {...props} />;
        }
        if (result.isVerified === false) {
          localStorage.clear();
          return <Redirect to={{ pathname: '/resend-email', state: { from: props.location } }} />;
        }
        localStorage.clear();
        return <Redirect to={{ pathname: '/signin', state: { from: props.location } }} />;
      }}
    />
  );
};

export default protectRoutes;
