import React, { useState } from 'react';
import FormContainer from './FormContainer';
import SlotsContainer from './SlotsContainer';
import Header from '../components/Header';

const MainContainer = ({ title, name }) => {
  const [amount, setAmount] = useState(1);

  const [limits, setLimits] = useState(null);

  const valueToAmount = value => {
    let val = (value.toString()).length;
    val = val < 1 ? 1 : val;

    if (val !== amount) {
      setLimits(null);
      setAmount(val);
    }
  };

  const doGenerate = ({ min, max }) => {
    setLimits({ min, max });
  };

  const doClear = _ => {
    setLimits(null);
    setAmount(1);
  };

  return (
    <div className="container">
      <Header title={title} name={name}/>
      <SlotsContainer amount={amount} limits={limits}/>
      <FormContainer onSetMaxValue={valueToAmount} onGenerate={doGenerate} onClear={doClear}/>
    </div>
  )
};

export default MainContainer
