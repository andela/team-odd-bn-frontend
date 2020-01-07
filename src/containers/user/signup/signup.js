import React from 'react';
import propTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import initialState from '../../../redux/store/initialState';
import {
  signupAction,
  updateSignupInputAction,
} from '../../../redux/actions/authActions';
import '../../../assets/css/signup.scss';
import SignupView from '../../../views/auth/SignupView';
import Spinner from '../../../components/Spinner';

const Signup = ({ updateSignUpInput, signUp, stateObject }) => {
  const { signupData,signupError,spinnerStatus } = stateObject.auth.signup;
  return signupData.message ? (
    <Redirect to="/verify-email" />
  ) : (
    <>
      {spinnerStatus ? (
        <Spinner />
      ) : (
        ''
      )}

      <SignupView
        updateSignupInputAction={updateSignUpInput}
        signupAction={signUp}
        stateObject={stateObject}
      />
      <ToastContainer />
    </>
  );
};
Signup.propTypes = {
  updateSignUpInput: propTypes.func,
  stateObject: propTypes.object,
  signUp: propTypes.func,
};
Signup.defaultProps = {
  signUp: null,
  updateSignUpInput: null,
  stateObject: initialState,
};

export const mapStateToProps = (state) => ({
  stateObject: state,
});

const actions = {
  signUp: signupAction,
  updateSignUpInput: updateSignupInputAction,
};

export default connect(mapStateToProps, actions)(Signup);
