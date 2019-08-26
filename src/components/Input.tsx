import * as React from 'react';
import { debounceEvent } from '../services/utils';

type InputProps = {
  name?: string,
  type?: string,
  placeholder?: string,
  min: number,
  step?: number,
  clear?: boolean,
  handleChange?: (val: string | number) => void,
  disabled?: boolean,
  inputmode?: string
}
const Input = ({
  name = '',
  type = 'number',
  placeholder = 'Input value',
  min = 0,
  step = 1,
  clear = false,
  handleChange = () => {},
  disabled = false,
  inputmode = 'text'
}: InputProps) => {
  let refInput = React.useRef<HTMLInputElement | null>(null);

  const [validationText, setValidationText] = React.useState('');

  const onChange = (e: { target: { value: string; }; }) => {
    debounceValidation(e.target.value);
  };

  const debounceValidation = debounceEvent((value: string) => {
    let timeout;
    const node = refInput.current;

    if (node && value !== '' && !isNaN(Number(value)) && Number(value) >= min) {
      const val = ~~ Number(value);
      node.value = String(val);
      clearTimeout(timeout);
      setValidationText('');
      handleChange(val);
    } else {
      if (node) {
        node.value = '';
      }
      setValidationText('Only positive integers are allowed');
      handleChange('');
      timeout = setTimeout(_ => setValidationText(''), 4000);
    }
  }, 1000);

  React.useEffect(() => {
    const node = refInput.current;
    if (node && clear || (node && node.value !== '' && min > Number(node.value) && !clear)) {
      node.value = '';
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
        inputMode={inputmode}
      />
      <span className="validation-text">{ validationText }</span>
    </div>
  )
};

export default Input
