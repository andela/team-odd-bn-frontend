import React from 'react';
import dotenv from 'dotenv';
import '../assets/css/passwordReset.scss';
import ResendEmail from '../containers/user/resendEmail';

dotenv.config();

const resendEmailView = () => (
  <div data-testid="resendEmail-View">
    <ResendEmail />
  </div>
);
export default resendEmailView;
