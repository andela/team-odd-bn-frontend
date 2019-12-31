import React from 'react';
import '../../assets/css/profile.css';

const TextInput = ({
  placeholder, name, value, disabled, onChange, pattern, title,
}) => (
  <>
    <input
      type="text"
      name={name}
      value={value}
      placeholder={placeholder}
      className={`${name}-input`}
      disabled={disabled}
      onChange={onChange}
      pattern={pattern}
      title={title}
    />
  </>
);

export default TextInput;
