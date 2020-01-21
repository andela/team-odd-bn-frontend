/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-shadow */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import queryString from 'query-string';
import PropTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';
import { connect } from 'react-redux';
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import SubmitButton from '../../../components/SubmitButton';
import InputField from '../../../components/InputField';
import { resetPasswordAction, updatePasswordInput, updateSpinnerStatus } from '../../../redux/actions/resetPasswordActions';
import Spinner from '../../../components/Spinner';
import { passwordBox, menu } from '../../../constants/passwordReset';

export class PasswordReset extends Component {
  handleSubmit(event) {
    event.preventDefault();
    const {
      updateSpinnerStatus, resetPasswordAction, stateObject, location,
    } = this.props;
    updateSpinnerStatus(true);
    const { password, confirmPassword } = stateObject.auth.resetPassword.payload;
    const param = queryString.parse(location.search);
    const newPassword = {
      password,
      confirmPassword,
    };
    const token = param.resetToken;
    resetPasswordAction({ token, newPassword });
  }

  render() {
    const { stateObject, updatePasswordInput } = this.props;
    return (
      <div>
        <Header menuList={menu} />
        {stateObject.auth.resetPassword.spinner ? (
          <Spinner data-test="resetPassword-spinner" />
        ) : (
          ''
        )}
        <div data-testid="resetPassword-View" className="boxContainer">
          <div className="fieldContainer">
            <div className="boxTitle">Reset Password</div>
            <hr className="boxLine" />
            <div className="boxDescription">
              Please enter your new password to finalize password reset
            </div>
            <form
              className="center-form"
              data-test="resetPassword-form"
              onSubmit={this.handleSubmit.bind(this)}
            >
              <div className="inputbox">
                <InputField
                  data-test="password"
                  handleChange={updatePasswordInput}
                  type="password"
                  inputList={passwordBox}
                />
              </div>
              <div className="btn-box">
                <SubmitButton
                  data-test="reset-password-btn"
                  buttonName="Reset"
                  className="btn-long"
                />
              </div>
            </form>
          </div>
        </div>

        <ToastContainer />
        {stateObject.auth.resetPassword.status === 'success' && <Redirect data-test="login-redirect" to="signin" />}
        <Footer className="authFooter" />
      </div>
    );
  }
}
PasswordReset.propTypes = {
  updateSpinnerStatus: PropTypes.func,
  resetPasswordAction: PropTypes.func,
  stateObject: PropTypes.object,
  updatePasswordInput: PropTypes.func,
  location: PropTypes.object,
};
PasswordReset.defaultProps = {
  updateSpinnerStatus: null,
  resetPasswordAction: null,
  stateObject: null,
  updatePasswordInput: null,
  location: null,
};
export const mapStateToProps = (state) => ({ stateObject: state });

export default connect(mapStateToProps,
  { resetPasswordAction, updatePasswordInput, updateSpinnerStatus })(PasswordReset);
