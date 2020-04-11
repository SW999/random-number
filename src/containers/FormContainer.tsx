import * as React from 'react';
import Input from '../components/Input';

type ReadyObject = {
  min: string | number,
  max: string | number
}
interface FormContainerTypes {
  onSetMaxValue: (value: string | number) => void;
  onGenerate: ({ min,  max }: ReadyObject) => void;
  onClear: () => void
}
const FormContainer = ({ onSetMaxValue, onGenerate, onClear }: FormContainerTypes) => {
  const [minValue, setMinValue] = React.useState<number>(1);

  const [isGenerate, setIsGenerate] = React.useState<boolean>(false);

  const [clear, setClear] = React.useState<boolean>(false);

  const [ready, setReadiness] = React.useState<ReadyObject>({
    min: '',
    max: ''
  });

  const handleClear = (e: React.MouseEvent) => {
    e.preventDefault();
    setClear(true);
    setMinValue(1);
    setReadiness({
      min: '',
      max: ''
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

  const handleMaxChange = (value: string | number) => setReadiness({ ...ready, max: value });

  const checkReadiness = () => {
    onSetMaxValue(ready.max);

    return ready.min !== '' && ready.max !== '' && !isGenerate;
  };

  const handleGenerate = (e: React.MouseEvent) => {
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
      <div className="container container-flex">
        {!isGenerate &&
        <button onClick={handleGenerate} disabled={!checkReadiness()} title={checkReadiness() ? '' : 'Add limits first'}>Generate !</button>
        }
        {isGenerate &&
        <button onClick={handleClear}>Clear</button>
        }
      </div>
    </React.Fragment>
  )
};

export default FormContainer
