import React from 'react';

const Input = ({ input, label, type, meta: { touched, error } }) => (
    <div  style={{ padding: 15 }}>
       <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type} />
            {touched && error && <span>{error}</span>}
        </div>
    </div>
);

export default Input;