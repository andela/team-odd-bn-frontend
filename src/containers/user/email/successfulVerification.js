/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-shadow */
/* eslint-disable react/prefer-stateless-function */
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import { connect } from 'react-redux';
import { verifyEmailAction } from '../../../redux/actions/verifyEmailActions';
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import verifiedAccount from '../../../assets/images/verified_account.png';
import { unverifiedUserMenu } from '../../../constants/passwordReset';

export class SuccessfulEmailVerification extends Component {
  componentDidMount() {
    const { location } = this.props;
    const param = queryString.parse(location.search);
    const token = param.verifiedToken;
    const { verifyEmailAction } = this.props;
    verifyEmailAction(token);
    localStorage.removeItem('token', token);
  }

  render() {
    return (
      <div>
        <Header menuList={unverifiedUserMenu} />
        <div data-testid="verifiedEmail-Container" className="boxContainer">
          <div className="fieldContainer">
            <div className="center">
              <img
                className="square-image"
                alt="barefoot_logo"
                src={verifiedAccount}
              />
            </div>
            <div className="boxTitle">Successful</div>
            <hr className="boxLine" />
            <div className="boxDescription">
              Your email address has been successfully verified!
            </div>
            <form>
              <div className="btn-box">
                <Link
                  to="/signin"
                  data-test="send-request-btn"
                  className="btn-long"
                >
                  <div className="btn-txt">Continue to signin</div>
                </Link>
              </div>
            </form>
          </div>
        </div>

        <ToastContainer />
        <Footer className="authFooter" />
      </div>
    )
  }
}
SuccessfulEmailVerification.propTypes = {
  verifyEmailAction: PropTypes.func,
  location: PropTypes.object,
};
SuccessfulEmailVerification.defaultProps = {
  verifyEmailAction: null,
  location: null,
};
export const mapStateToProps = (state) => ({ stateObject: state });

export default connect(mapStateToProps, { verifyEmailAction })(SuccessfulEmailVerification);
