import React, { useEffect } from 'react';
import { debounceEvent } from '../services/utils';

const Input = ({ name = '', type = 'number', placeholder = 'Input value', min = 0, max = '', step = 1, handleChange = _ => {} }) => {
  const refInput = React.createRef();

  const onChange = e => {
    const { value, validity } = e.target;
    debounceValidation({ value, validity });
  };

  const debounceValidation = debounceEvent(({ value, validity }) => {
    if (validity.valid) {
      handleChange(value);
    } else {
      refInput.current.value = '';
      handleChange('');
    }
  }, 1000);

  useEffect(() => {
    if (refInput.current.value !== '' && min > refInput.current.value) {
      refInput.current.value = '';
    }
  }, [min]);

  return (
    <div className="form-group">
      <label className="form-label" htmlFor={`${name}-${type}-${min}`}>{name}</label>
      <input
        ref={refInput}
        id={`${name}-${type}-${min}`}
        className="form-input"
        required

        type={type}
        placeholder={placeholder}
        min={min}
        max={max}
        step={step}
        onChange={onChange}
      />
    </div>
  )
};

export default Input
