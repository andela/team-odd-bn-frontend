import React from 'react';
import '../assets/css/table.scss';
import propTypes from 'prop-types';

const SubmitButton = ({ status, className }) => (
  <div className={className}>
    {status}
  </div>
);
SubmitButton.propTypes = {
  status: propTypes.string,
  className: propTypes.string,
};
SubmitButton.defaultProps = {
  status: null,
  className: null,
};
export default SubmitButton;
