import React from 'react';
import dotenv from 'dotenv';
import '../assets/css/passwordReset.scss';
import ForgotPassword from '../containers/user/password/forgotPassword';

dotenv.config();

const forgotPasswordView = () => (
  <div data-testid="forgotPassword-View">
    <ForgotPassword />
  </div>
);
export default forgotPasswordView;
