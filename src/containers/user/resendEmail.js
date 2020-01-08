/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-shadow */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';
import Header from '../../components/headerUnverified';
import Footer from '../../components/footer';
import InputField from '../../components/InputField';
import SubmitButton from '../../components/SubmitButton';
import {
  resendVerificationEmailAction,
  updateEmailInput,
  updateSpinnerStatus,
} from '../../redux/actions/resendEmailActions';
import Spinner from '../../components/Spinner';
import emailBox from '../../constants/resendEmail';

export class ResendEmail extends Component {
  handleSubmit(event) {
    event.preventDefault();
    const {
      updateSpinnerStatus,
      resendVerificationEmailAction,
      stateObject,
    } = this.props;
    const { email } = stateObject.auth.resendEmail.payload;
    updateSpinnerStatus(true);
    resendVerificationEmailAction(email);
  }

  render() {
    const { stateObject, updateEmailInput } = this.props;
    const { spinner } = stateObject.auth.resendEmail;
    return (
      <div>
        <Header />
        {spinner ? <Spinner data-test="resendEmail-spinner" /> : ''}
        <div data-testid="resendEmail-Container" className="boxContainer">
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
            <div className="boxDescription">
              In order to start using your barefoot-nomad account , you need to
              confirm your email address
            </div>
            <form
              data-test="resendEmail-form"
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
                  buttonName="Verify Email Address"
                  className="btn-long"
                />
              </div>
            </form>
          </div>
        </div>

        <ToastContainer />
        <Footer />
      </div>
    );
  }
}
ResendEmail.propTypes = {
  updateSpinnerStatus: PropTypes.func,
  resendVerificationEmailAction: PropTypes.func,
  stateObject: PropTypes.object,
  updateEmailInput: PropTypes.func,
};
ResendEmail.defaultProps = {
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
})(ResendEmail);
