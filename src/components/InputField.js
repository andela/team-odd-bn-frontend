import React from 'react';
import dotenv from 'dotenv';
import '../assets/css/signup.scss';
import '../assets/css/signin.scss';
import propTypes from 'prop-types';

dotenv.config();
const singleInput = {};
const InputField = ({ handleChange, inputList }) => inputList.map((i) => (
  <div className={i.className} key={i.input}>
    <div>{i.input}</div>
    <input
      required
      pattern={i.pattern}
      title={i.title}
      type={i.type}
      id={i.className}
      onChange={handleChange ? ((e) => {
        singleInput[i.className] = e.target.value;
        return handleChange(singleInput);
      }) : () => 0}
    />
  </div>
));
InputField.propTypes = {
  handleChange: propTypes.func,
  className: propTypes.array,
};
InputField.defaultProps = {
  handleChange: null,
  inputList: null,
};
export default InputField;
