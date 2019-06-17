import * as React from 'react';
import { debounceEvent } from '../services/utils';

const Input = ({ name = '', type = 'number', placeholder = 'Input value', min = 0, step = 1, clear = false, handleChange = _ => {}, disabled = false }) => {
  let refInput = React.useRef(null);

  const [validationText, setValidationText] = React.useState('');

  const onChange = e => {
    const { value } = e.target;
    debounceValidation(value);
  };

  const debounceValidation = debounceEvent((value) => {
    let timeout;

    if (value !== '' && !isNaN(Number(value)) && value >= min) {
      const val = ~~ Number(value);
      refInput.current.value = val;
      clearTimeout(timeout);
      setValidationText('');
      handleChange(val);
    } else {
      refInput.current.value = '';
      setValidationText('Only positive integers are allowed');
      handleChange('');
      timeout = setTimeout(_ => setValidationText(''), 4000);
    }
  }, 1000);

  React.useEffect(() => {
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
