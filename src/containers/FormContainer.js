import React, { useState } from 'react';
import Input from '../components/Input';

const FormContainer = ({ onSetMaxValue, onGenerate, onClear }) => {
  const [minValue, setMinValue] = useState(1);

  const [isGenerate, setIsGenerate] = useState(false);

  const [clear, setClear] = useState(false);

  const [ready, setReadiness] = useState({
    min: '',
    max: ''
  });

  const handleClear = e => {
    e.preventDefault();
    setClear(true);
    setMinValue(1);
    setReadiness({
      min: '',
      max: ''
    });
    setIsGenerate(false);
    onClear();
  };

  const handleMinChange = value => {
    const val = value === '' ? '' : Number(value);
    const max = ready.max > val ? ready.max : '';
    setMinValue(val + 1);
    setReadiness({ min: val, max: max });
  };

  const handleMaxChange = value => setReadiness({ ...ready, max: value });

  const checkReadiness = _ => {
    onSetMaxValue(ready.max);

    return ready.min !== '' && ready.max !== '' && !isGenerate;
  };

  const handleGenerate = e => {
    e.preventDefault();
    onGenerate(ready);
    setIsGenerate(true);
    setClear(false);
  };

  return (
    <React.Fragment>
      <div className="container container-flex">
        <Input
          name="From"
          placeholder="Min value"
          min={0}
          handleChange={handleMinChange}
          clear={clear}
          disabled={isGenerate}
        />
        <Input
          name="To"
          placeholder="Max value"
          min={minValue}
          handleChange={handleMaxChange}
          clear={clear}
          disabled={isGenerate}
        />
      </div>
      {checkReadiness() &&
      <div className="container container-flex">
        <button onClick={handleGenerate}>Generate !</button>
      </div>
      }
      {isGenerate &&
      <div className="container container-flex">
        <button onClick={handleClear}>Clear</button>
      </div>
      }
    </React.Fragment>
  )
};

export default FormContainer
