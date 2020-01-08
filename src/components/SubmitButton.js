import React from 'react';
import dotenv from 'dotenv';
import '../assets/css/signup.scss';
import propTypes from 'prop-types';

dotenv.config();

const SubmitButton = ({ buttonName, className }) => (
  <div className="submitBtn">
    <button id="refreshButton" className={className} type="submit">
      {buttonName}
    </button>
  </div>
);
SubmitButton.propTypes = {
  buttonName: propTypes.string,
  className: propTypes.string,
};
SubmitButton.defaultProps = {
  buttonName: null,
  className: null,
};
export default SubmitButton;
