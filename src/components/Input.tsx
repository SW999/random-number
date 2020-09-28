import React, {
  FunctionComponent,
  useRef,
  useEffect,
  useState,
  ChangeEvent,
} from 'react';
import { debounceEvent, checkNumbers } from '../utils';

type InputProps = {
  clear?: boolean;
  disabled?: boolean;
  handleChange: (val: string | number) => void;
  min: number;
  name?: string;
  placeholder?: string;
  step?: number;
};

const Input: FunctionComponent<InputProps> = ({
  clear = false,
  disabled = false,
  handleChange,
  min = 0,
  name = '',
  placeholder = 'Input value',
  step = 1,
}) => {
  const refInput = useRef<HTMLInputElement | null>(null);
  const [validationText, setValidationText] = useState('');
  const debounceValidation = debounceEvent((value: string) => {
    let timeout;
    const node = refInput?.current;

    if (node && value !== '' && !isNaN(Number(value)) && Number(value) >= min) {
      const val = ~~Number(value);
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
      timeout = setTimeout(() => setValidationText(''), 4000);
    }
  }, 1000);
  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    debounceValidation(e.target.value);

  useEffect(() => {
    const node = refInput?.current;
    if (
      (node && clear) ||
      (node && node.value !== '' && min > Number(node.value) && !clear)
    ) {
      node.value = '';
    }
  }, [min, clear]);

  return (
    <div className="form-group">
      <label className="form-label" htmlFor={`${name}-${min}`}>
        {name}
      </label>
      <input
        className="form-input"
        disabled={disabled}
        id={`${name}-${min}`}
        min={min}
        onChange={onChange}
        onKeyDown={checkNumbers}
        placeholder={placeholder}
        ref={refInput}
        required
        step={step}
        type="number"
      />
      <span className="validation-text">{validationText}</span>
    </div>
  );
};

export default Input;
