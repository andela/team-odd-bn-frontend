import React from 'react';
import '../assets/css/table.scss';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SubmitButton = ({ action, url, background }) => (
  <div style={{ backgroundColor: background }} className="actionButton">
    <Link to={url}>
      {action}
    </Link>
  </div>

);
SubmitButton.propTypes = {
  action: propTypes.string,
  url: propTypes.string,
  background: propTypes.string,
};
SubmitButton.defaultProps = {
  action: null,
  url: null,
  background: null,
};
export default SubmitButton;
