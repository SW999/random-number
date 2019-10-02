import * as React from 'react';
import FormContainer from './FormContainer';
const SlotsContainer = React.lazy(() => import('./SlotsContainer'));
import Header from '../components/Header';

interface MainContainerProps {
  title: string,
  name: string
}

interface LimitsObj {
  min: string | number,
  max: string | number
}

const MainContainer = ({ title, name }: MainContainerProps) => {
  const [amount, setAmount] = React.useState<number>(1);

  const [limits, setLimits] = React.useState<LimitsObj | null>(null);

  const valueToAmount = (value: string | number) => {
    let val = (value.toString()).length;
    val = val < 1 ? 1 : val;

    if (val !== amount) {
      setLimits(null);
      setAmount(val);
    }
  };

  const doGenerate = ({ min, max }: LimitsObj) => {
    setLimits({ min, max });
  };

  const doClear = () => {
    setLimits(null);
    setAmount(1);
  };

  return (
    <div className="container">
      <Header title={title} name={name}/>
      <React.Suspense fallback={<div>Loading...</div>}>
        <SlotsContainer amount={amount} limits={limits}/>
      </React.Suspense>
      <FormContainer onSetMaxValue={valueToAmount} onGenerate={doGenerate} onClear={doClear}/>
    </div>
  )
};

export default MainContainer
