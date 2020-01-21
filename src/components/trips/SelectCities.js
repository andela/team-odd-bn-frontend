import React from 'react';
import '../../assets/css/base.scss';

const inputsValues = {};
const SelectCities = ({ myData, handleChange, inputName }) => inputName.map((a) => (
  <div className={a.className} key={a.className}>
    <select
      onChange={(e) => {
        inputsValues[a.name] = e.target.value;
        return handleChange(inputsValues);
      }}
      defaultValue=""
      required
    >
      <option value="" disabled>
        { a.PlaceHolderName}
      </option>

      {myData
      && myData.map((cities) => (
        <option name={a.name} value={cities.id} key={cities.id}>
          {cities.city}
        </option>
      ))}
    </select>
  </div>
));

export default SelectCities;
