
import React, { useState, useEffect } from 'react';

import './Forms.css';


const FormField = ({ type, name, placeholder, label, required, message, link }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    console.log(value);
    setInputValue(value);
  }

  return (
    <div className='input-box'>
      <label htmlFor={label}>
        {label}
        <input id={label}
               type={type}
               name={name}
               value={inputValue}
               placeholder={placeholder}
               onChange={(e) => handleChange(e)}
               required={required}
        />
        {message && (<span> {message} </span>)}
      </label>
      {link &&  (<a className='link2' href={link.to}> {link.label} </a>)}
    </div>
  );
}


export default FormField;