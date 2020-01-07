/* eslint-disable no-shadow */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { Redirect } from 'react-router-dom';
import propTypes from 'prop-types';
import dotenv from 'dotenv';
import { updateSigninInputAction, signinAction } from '../../../redux/actions/signinActions';
import LoginView from '../../../views/auth/LoginView';
import Spinner from '../../../components/Spinner';
import verifyToken from '../../../helpers/verifyToken';
import initialState from '../../../redux/store/initialState';

dotenv.config();

class Login extends Component {
  componentDidMount() {
    this.verifyExistToken();
  }

  verifyExistToken() {
    const existToken = localStorage.getItem('token');
    return verifyToken(existToken);
  }

  render() {
    const { updateSigninInputAction, signInState, signinAction } = this.props;
    const { signinData, signinError,spinnerStatus } = signInState.auth.signin;
    const loggedUser = this.verifyExistToken();

    return (loggedUser !== false) ? (
      <Redirect to="dashboard" />
    )
      : (
        <>
          {spinnerStatus ? (
            <Spinner />
          ) : (
            ''
          )}
          <LoginView
            updateSigninInputAction={updateSigninInputAction}
            signInState={signInState}
            loginAction={signinAction}
          />
          <ToastContainer />
        </>
      );
  }
}
Login.propTypes = {
  updateSigninInputAction: propTypes.func,
  signInState: propTypes.object,
  signinAction: propTypes.func,
};
Login.defaultProps = {
  updateSigninInputAction: null,
  signInState: initialState,
  signinAction: null,
};

const mapStateToProps = (state) => ({
  signInState: state,
});
const mapDispatchToProps = {
  signinAction,
  updateSigninInputAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
