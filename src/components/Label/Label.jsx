import React from 'react';
var Translate = require('react-redux-i18n').Translate;
const Label = ({ label }) => (
  <label>
    <Translate value={label} />
  </label>
);

export default Label;
