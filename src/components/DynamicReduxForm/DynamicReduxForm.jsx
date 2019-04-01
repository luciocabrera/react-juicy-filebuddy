import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Input from './../Input/Input';

const DynamicReduxForm = props => {
  const { handleSubmit, pristine, reset, submitting, fields } = props;

  return (
    <form onSubmit={handleSubmit}>
        {fields.map(field => {
        return (
          <Field
            key= {field.name}
            name= {field.name}
            type="text"
            component={Input}
            label= {field.label}
          />
        );
      })}
      <div>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'DynamicReduxForm', // a unique identifier for this form
})(DynamicReduxForm);
