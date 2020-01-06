
/* eslint-disable no-shadow */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';
import verifyToken from '../../../helpers/verifyToken';
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import InputField from '../../../components/InputField';
import SubmitButton from '../../../components/SubmitButton';
import {
  resendVerificationEmailAction,
  updateEmailInput,
  updateSpinnerStatus,
} from '../../../redux/actions/verifyEmailActions';
import Spinner from '../../../components/Spinner';
import emailBox from '../../../constants/verifyEmail';
import { unverifiedUserMenu } from '../../../constants/passwordReset';


export class VerifyEmail extends Component {
  handleSubmit(event) {
    event.preventDefault();
    const {
      updateSpinnerStatus,
      resendVerificationEmailAction,
      stateObject,
    } = this.props;
    const { email } = stateObject.auth.verifyEmail.payload;
    updateSpinnerStatus(true);
    resendVerificationEmailAction(email);
  }

  render() {
    const { stateObject, updateEmailInput } = this.props;
    const { spinner } = stateObject.auth.verifyEmail;
    return (
      <div>
        <Header menuList={unverifiedUserMenu} />
        {spinner ? <Spinner data-test="verifyEmail-spinner" /> : ''}
        <div data-testid="verifyEmail-Container" className="boxContainer">
          <div className="fieldContainer">
            <div className="center">
              <img
                className="square-image"
                alt="barefoot_logo"
                src={`
   https://res.cloudinary.com/victorkarangwa4/image/upload/v1578477999/icons8-email_open_filled_n80pwf.png`}
              />
            </div>
            <div className="boxTitle">Verify your email address</div>
            <hr className="boxLine" />
            <div className="boxDescription blue-bg">
              {` We have sent you a verification email to ${
                verifyToken(localStorage.getItem('token')).email
              }`}
            </div>
            <div className="boxDescription">
              If you have not received verification email or if you mistyped
              your email address, you can resend the verication email
            </div>
            <form
              className="center-form"
              data-test="verifyEmail-form"
              onSubmit={this.handleSubmit.bind(this)}
            >
              <div className="inputbox">
                <InputField
                  data-test="email"
                  name="requestEmail"
                  handleChange={updateEmailInput}
                  type="email"
                  inputList={emailBox}
                />
              </div>
              <div className="btn-box">
                <SubmitButton
                  data-test="send-request-btn"
                  buttonName="Resend"
                  className="btn-long"
                />
              </div>
            </form>
          </div>
        </div>

        <ToastContainer />
        <Footer className="authFooter" />
      </div>
    );
  }
}
VerifyEmail.propTypes = {
  updateSpinnerStatus: PropTypes.func,
  resendVerificationEmailAction: PropTypes.func,
  stateObject: PropTypes.instanceOf(Object),
  updateEmailInput: PropTypes.func,
};
VerifyEmail.defaultProps = {
  updateSpinnerStatus: null,
  resendVerificationEmailAction: null,
  stateObject: null,
  updateEmailInput: null,
};
export const mapStateToProps = (state) => ({ stateObject: state });

export default connect(mapStateToProps, {
  resendVerificationEmailAction,
  updateEmailInput,
  updateSpinnerStatus,
})(VerifyEmail);
