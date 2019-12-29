import React from 'react';
import dotenv from 'dotenv';
import '../../assets/css/signup.scss';
import propTypes from 'prop-types';
import SubmitButton from '../../components/SubmitButton';
import InputField from '../../components/InputField';
import initialState from '../../redux/store/index';
import {
  signupInputs,
  signupFirstNameLastNameInputs,
  socialData,
  extraInfoData,
} from '../../constants/signUp';
import CommonAuthForm from './CommonAuthForm';

dotenv.config();

const SignupView = ({ updateSignupInputAction, signupAction, stateObject }) => (
  <CommonAuthForm
    submit={signupAction}
    data={stateObject.auth.signup.signupInputData}
    extraInfoData={extraInfoData}
    socialData={socialData}
    introNote="Create account"
    components={[
      <div key="firstLastName" className="firstLastName">
        <InputField
          handleChange={updateSignupInputAction}
          inputList={signupFirstNameLastNameInputs}
        />
      </div>,
      <InputField
        key="input"
        handleChange={updateSignupInputAction}
        inputList={signupInputs}
      />,
      <SubmitButton
        key="submitButton"
        className="btn-short"
        buttonName="signup"
      />,
    ]}
  />
);
SignupView.propTypes = {
  updateSignupInputAction: propTypes.func,
  signupAction: propTypes.func,
  stateObject: propTypes.object,
};
SignupView.defaultProps = {
  updateSignupInputAction: null,
  signupAction: null,
  stateObject: initialState,
};

export default SignupView;
