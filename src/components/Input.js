import React, { useState, useEffect } from 'react';
import { debounceEvent } from '../services/utils';

const Input = ({ name = '', type = 'number', placeholder = 'Input value', min = 0, step = 1, clear = false, handleChange = _ => {}, disabled = false }) => {
  const refInput = React.createRef();

  const [validationText, setValidationText] = useState('');

  const onChange = e => {
    const { value } = e.target;
    debounceValidation({ value });
  };

  const debounceValidation = debounceEvent(({ value }) => {
    let timeout;

    if (refInput && value !== '' && !isNaN(Number(value)) && value >= min) {
      refInput.current.value = Number(value);
      clearTimeout(timeout);
      setValidationText('');
      handleChange(Number(value));
    } else {
      refInput.current.value = '';
      setValidationText('May by positive integer number');
      handleChange('');
      timeout = setTimeout(_ => setValidationText(''), 4000);
    }
  }, 1000);

  useEffect(() => {
    if (clear || (refInput.current.value !== '' && min > refInput.current.value && !clear)) {
      refInput.current.value = '';
    }
  }, [min, clear]);

  return (
    <div className="form-group">
      <label className="form-label" htmlFor={`${name}-${type}-${min}`}>{name}</label>
      <input
        ref={refInput}
        id={`${name}-${type}-${min}`}
        className="form-input"
        required
        disabled={disabled}

        type={type}
        placeholder={placeholder}
        min={min}
        step={step}
        onChange={onChange}
      />
      <span className="validation-text">{ validationText }</span>
    </div>
  )
};

export default Input
