import React, { useState, FunctionComponent, MouseEvent } from 'react';
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
  const [minValue, setMinValue] = useState<number>(1); // FIXME
  const [isGenerate, setIsGenerate] = useState<boolean>(false); // FIXME
  const [clear, setClear] = useState<boolean>(false); // FIXME
  const [ready, setReadiness] = useState<ReadyObject>({
    // FIXME
    min: '',
    max: '',
  });

  const handleClear = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setClear(true);
    setMinValue(1);
    setReadiness({
      min: '',
      max: '',
    });
    setIsGenerate(false);
    onClear();
    setTimeout(() => setClear(false), 100);
  };

  const handleMinChange = (value: string | number) => {
    const val = value === '' ? 0 : Number(value);
    const max = Number(ready.max) > val ? ready.max : '';
    setMinValue(val + 1);
    setReadiness({ min: val, max: max });
  };

  const handleMaxChange = (value: string | number) =>
    setReadiness({ ...ready, max: value });

  const checkReadiness = () => {
    onSetMaxValue(ready.max);

    return ready.min !== '' && ready.max !== '' && !isGenerate;
  };

  const handleGenerate = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onGenerate(ready);
    setIsGenerate(true);
    setClear(false);
  };

  return (
    <>
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
      <div className="container container-flex">
        {!isGenerate && (
          <button
            onClick={handleGenerate}
            disabled={!checkReadiness()}
            title={checkReadiness() ? '' : 'Add limits first'}
          >
            Generate !
          </button>
        )}
        {isGenerate && <button onClick={handleClear}>Clear</button>}
      </div>
    </>
  );
};

export default FormContainer;
