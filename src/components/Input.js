import React from 'react'

const Input = ({ name = '', type = 'number', placeholder = 'Input value', min = 0, max = '', step = 1, handleChange = _ => {} }) => {
  const handleValidate = e => {
    return e.target.validity.valid || (e.target.value = '');
  };

  return (
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
        onInput={handleValidate}
        required
      />
    </div>
  )
};

export default Input
