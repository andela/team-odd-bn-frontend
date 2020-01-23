import React from 'react';
import '../../assets/css/base.scss';
import '../../assets/css/roundtrip.scss';

const inputValues = {};
export const checkCurrentDate = () => {
  const currentDate = new Date();
  return JSON.stringify(currentDate).slice(1, 11);
};
const DateFields = ({ dateFieldName, handleChange }) => dateFieldName.map((x) => (

  <div className={x.className} key={x.className}>
    <label htmlFor={x.htmlForName}>{ x.FieldName }</label>
    <input
      data_test={x.data_test}
      type={x.type}
      name={x.name}
      required
      min={checkCurrentDate()}
      id={x.id}
      value={x.value}
      onChange={(e) => {
        inputValues[x.name] = e.target.value;
        return handleChange(inputValues);
      }}
    />
  </div>

));

export default DateFields;
