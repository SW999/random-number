import React, { useState, FunctionComponent, FormEvent } from 'react';
import Input from '../components/Input';

type ReadyObject = {
  min: string | number;
  max: string | number;
};

type FormContainerTypes = {
  onClear: () => void;
  onGenerate: (o: ReadyObject) => void;
  onSetMaxValue: (value: string | number) => void;
};

const FormContainer: FunctionComponent<FormContainerTypes> = ({
  onClear,
  onGenerate,
  onSetMaxValue,
}) => {
  const [minValue, setMinValue] = useState<number>(1);
  const [isGenerate, setIsGenerate] = useState<boolean>(false);
  const [clear, setClear] = useState<boolean>(false);
  const [ready, setReadiness] = useState<ReadyObject>({
    min: '',
    max: '',
  });

  const handleClear = () => {
    setClear(true);
    setMinValue(1);
    setReadiness({
      min: '',
      max: '',
    });
    setIsGenerate(false);
    onClear();
  };

  const handleMinChange = (value: string | number) => {
    const val = value === '' ? 0 : Number(value);
    const max = Number(ready.max) > val ? ready.max : '';
    setMinValue(val + 1);
    setReadiness({ max, min: val });
  };

  const handleMaxChange = (value: string | number) => {
    setReadiness({ ...ready, max: value });
    onSetMaxValue(value);
  };

  const isFormReady = ready.min !== '' && ready.max !== '' && !isGenerate;

  const handleGenerate = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onGenerate(ready);
    setIsGenerate(true);
    setClear(false);
  };

  return (
    <form onSubmit={handleGenerate}>
      <div className="container container--flex container--flex-mobile">
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
      <div className="container container--flex">
        {!isGenerate && (
          <button
            // onClick={handleGenerate}
            type="submit"
            disabled={!isFormReady}
            title={isFormReady ? '' : 'Add limits first'}
          >
            Generate !
          </button>
        )}
        {isGenerate && (
          <button onClick={handleClear} type="button">
            Clear
          </button>
        )}
      </div>
    </form>
  );
};

export default FormContainer;
