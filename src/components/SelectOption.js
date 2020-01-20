import React from 'react';
import '../assets/css/selectOption.scss';

const SelectOption = ({
  classname, options, handleChange, email,
}) => {
  return (
    <select data-test="selectOption-test" defaultValue="" className={classname} onChange={(e) => (handleChange(e.target.value, email))}>
      <option disabled value="">
      Choose
      </option>
      {options
      && options.map((item) => (
        <option value={item.id} key={item.id}>
          {item.type}
        </option>
      ))}
    </select>
  );
};

export default SelectOption;
