import React, { useState } from 'react';
import Input from '../components/Input';

const FormContainer = ({ onSetMaxValue, onGenerate }) => {
  const [minValue, setMinValue] = useState(0);

  const [ready, setReadiness] = useState({
    min: '',
    max: ''
  });

  const handleMinChange = value => {
    const val = Number(value);
    const max = ready.max > val ? ready.max : '';
    setMinValue(val + 1);
    setReadiness({ min: val, max: max });
  };

  const handleMaxChange = value => setReadiness({ ...ready, max: value });

  const checkReadiness = _ => {
    onSetMaxValue(ready.max);

    return ready.min !== '' && ready.max !== '';
  };

  const hendleGenerate = e => { // TODO: disable btn while the Slots are spinning
    e.preventDefault();
    onGenerate(ready);
  };

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
        <button onClick={hendleGenerate}>Generate !</button>
      </div>
      }
    </React.Fragment>
  )
};

export default FormContainer
