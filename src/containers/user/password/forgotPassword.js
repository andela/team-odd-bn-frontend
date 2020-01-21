/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-shadow */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import InputField from '../../../components/InputField';
import SubmitButton from '../../../components/SubmitButton';
import { sendResetRequestAction, updateEmailInput, updateSpinnerStatus } from '../../../redux/actions/resetPasswordActions';
import Spinner from '../../../components/Spinner';
import { emailBox, menu } from '../../../constants/passwordReset';

export class ForgotPassword extends Component {
  handleSubmit(event) {
    event.preventDefault();
    const { updateSpinnerStatus, sendResetRequestAction, stateObject } = this.props;
    const { email } = stateObject.auth.resetPassword.payload;
    updateSpinnerStatus(true);
    sendResetRequestAction(email);
  }

  render() {
    const { stateObject, updateEmailInput } = this.props;
    return (
      <div>
        <Header menuList={menu} />
        {stateObject.auth.resetPassword.spinner ? (
          <Spinner data-test="forgotPassword-spinner" />
        ) : (
          ''
        )}
        <div data-testid="forgotPassword-Container" className="boxContainer">
          <div className="fieldContainer">
            <div className="boxTitle">Reset Password</div>
            <hr className="boxLine" />
            <div className="boxDescription">
              Please enter your email address. You will receive an email to
              create a new password via email.
            </div>
            <form
              data-test="forgotPassword-form"
              className="center-form"
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
                  buttonName="Send reset request"
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
ForgotPassword.propTypes = {
  updateSpinnerStatus: PropTypes.func,
  sendResetRequestAction: PropTypes.func,
  stateObject: PropTypes.object,
  updateEmailInput: PropTypes.func,
};
ForgotPassword.defaultProps = {
  updateSpinnerStatus: null,
  sendResetRequestAction: null,
  stateObject: null,
  updateEmailInput: null,
};
export const mapStateToProps = (state) => ({ stateObject: state });

export default connect(mapStateToProps, {
  sendResetRequestAction, updateEmailInput, updateSpinnerStatus,
})(ForgotPassword);
