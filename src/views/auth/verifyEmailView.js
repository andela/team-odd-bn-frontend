import React from 'react';
import dotenv from 'dotenv';
import '../../assets/css/authentication.scss';
import VerifyEmail from '../../containers/user/email/verifyEmail';

dotenv.config();

const verifyEmailView = () => (
  <div data_testid="verifyEmail-View">
    <VerifyEmail />
  </div>
);
export default verifyEmailView;
