import React from 'react';
import Label from './../Label/Label';
const Select = ({
  name,
  label,
  required,
  options,
  _handleChange
}) => (
  <div style={{ width: '100%' }}>
    <Label label={label}/>
    <div style={{ width: '100%' }}>
      <select
        name={name}
        required={required}
        onChange={_handleChange}
        style={{ width: '100%' }}
      >
        {options.map(option => (
          <option value={JSON.stringify(option)} key={option.key}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  </div>
);

export default Select;
