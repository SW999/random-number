import React, { FunctionComponent, lazy, useState, Suspense } from 'react';
import FormContainer from './FormContainer';
import Header from '../components/Header';
const SlotsContainer = lazy(() => import('./SlotsContainer'));

type MainContainerProps = {
  title: string;
  name: string;
};

type LimitsObj = {
  min: string | number;
  max: string | number;
};

const MainContainer: FunctionComponent<MainContainerProps> = ({
  name,
  title,
}) => {
  const [amount, setAmount] = useState<number>(1);
  const [limits, setLimits] = useState<LimitsObj | null>(null);
  const valueToAmount = (value: string | number) => {
    let val = value.toString().length;
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
      <Header title={title} name={name} />
      <Suspense fallback={<div className="loader spin-loader-margins" />}>
        <SlotsContainer amount={amount} limits={limits} />
      </Suspense>
      <FormContainer
        onSetMaxValue={valueToAmount}
        onGenerate={doGenerate}
        onClear={doClear}
      />
    </div>
  );
};

export default MainContainer;
