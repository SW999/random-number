import React from 'react'

const Input = ({ name = '', type = 'number', placeholder = 'Input value', min = 0, max = '', step = 1, handleChange = () => {} }) => (
  <div className="form-group">
    <label className="form-label" htmlFor={`${name}-${type}-${min}`}>{name}</label>
    <input
      type={type}
      placeholder={placeholder}
      min={min}
      max={max}
      step={step}
      onChange={handleChange}
      id={`${name}-${type}-${min}`}
      className="form-input"
      onInput="validity.valid||(value='')"
      required
    />
  </div>
);

export default Input
