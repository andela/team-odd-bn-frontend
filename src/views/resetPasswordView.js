import React from 'react';
import dotenv from 'dotenv';
import '../assets/css/passwordReset.scss';
import ResetPassword from '../containers/user/password/resetPassword';

dotenv.config();

const resetPasswordView = () => (
  <div data-testid="resetPassword-View">
    <ResetPassword />
  </div>
);
export default resetPasswordView;
