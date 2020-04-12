import * as React from 'react';
import { lazy, useState } from 'react';
import FormContainer from './FormContainer';
const SlotsContainer = lazy(() => import('./SlotsContainer'));
import { Header } from '../components/Header';

interface MainContainerProps {
  title: string,
  name: string
}

interface LimitsObj {
  min: string | number,
  max: string | number
}

const MainContainer = ({ title, name }: MainContainerProps) => {
  const [amount, setAmount] = useState<number>(1);
  const [limits, setLimits] = useState<LimitsObj | null>(null);
  const valueToAmount = (value: string | number) => {
    let val = (value.toString()).length;
    val = val < 1 ? 1 : val;

    if (val !== amount) {
      setLimits(null);
      setAmount(val);
    }
  };

  const doGenerate = ({ min, max }: LimitsObj) => setLimits({ min, max });
  const doClear = () => {
    setLimits(null);
    setAmount(1);
  };

  return (
    <div className="container">
      <Header title={title} name={name}/>
      <React.Suspense fallback={<div className="loader spin-loader-margins" />}>
        <SlotsContainer amount={amount} limits={limits} />
      </React.Suspense>
      <FormContainer onSetMaxValue={valueToAmount} onGenerate={doGenerate} onClear={doClear}/>
    </div>
  )
};

export default MainContainer
