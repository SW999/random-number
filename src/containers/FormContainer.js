import React, { useState } from 'react';
import Input from '../components/Input';

const FormContainer = ({ props }) => {
  const [minValue, setMinValue] = useState(0);

  const [isReady, setReadiness] = useState({
    min: '',
    max: ''
  });

  const handleMinChange = value => {
    const val = Number(value);
    const max = isReady.max > val ? isReady.max : '';
    setMinValue(val + 1);
    setReadiness({ min: val, max: max });
  };

  const handleMaxChange = value => setReadiness({ ...isReady, max: value });

  const checkReadiness = _ => isReady.min !== '' && isReady.max !== '';

  return (
    <React.Fragment>
      <div className="container container-flex">
        <Input
          name="From"
          placeholder="Min value"
          min={0}
          handleChange={handleMinChange}
        />
        <Input
          name="To"
          placeholder="Max value"
          min={minValue}
          handleChange={handleMaxChange}
        />
      </div>
      {checkReadiness() &&
      <div className="container container-flex">
        <button>Generate !</button>
      </div>
      }
    </React.Fragment>
  )
};

export default FormContainer
