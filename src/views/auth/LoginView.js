import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signinAction, updateSigninInputAction } from '../../redux/actions/signinActions';
import InputField from '../../components/InputField';
import SubmitButton from '../../components/SubmitButton';
import loginInputs from '../../constants/login';
import '../../assets/css/signin.scss';
import { ICON } from '../../assets/images/icon';
import Facebook from '../social/Facebook';
import Google from '../social/Google';


const login = ({ updateSigninInputAction, loginAction, signInState }) => (
  <form onSubmit={(e) => {
    e.preventDefault();
    loginAction(signInState.auth.signin.signinInputData);
  }}
  >
    <div className="authContainer">
      <div className="signinBox">
        <div className="barefootIcon">
          <img alt="icon" src={ICON} />
        </div>
        <div className="introNote">
          <div>Login</div>
        </div>
        <InputField handleChange={updateSigninInputAction} inputList={loginInputs} />
        <SubmitButton buttonName="Login" className="btn-short" />

        <div className="authFormextraInfo">
          <div>
            <div>
              Already dont have an account? &ensp;
              <Link to="/signup">signup here</Link>
            </div>
            <div>
              <Link to="/forgot-password">Forgot Password?</Link>
            </div>
          </div>
          <div>
            <hr className="orLine" />
            or
            <hr className="orLine" />
          </div>
        </div>
        <div>
          <div>
            <div className="socialBtn">
              <Google buttonName="signin with google" />
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className="socialBtn">
              <Facebook buttonName="signin with facebook" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
);

const mapStateToProps = (state) => ({
  signInState: state,
});

export default connect(mapStateToProps, { signinAction, updateSigninInputAction })(login);
