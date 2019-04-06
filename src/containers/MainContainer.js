import React, { useState } from "react";
import FormContainer from "./FormContainer";
import SlotsContainer from "./SlotsContainer";

const MainContainer = ({ title, name }) => {
  const [amount, setAmount] = useState(1);

  const valueToAmount = value => {
    let val = (value.toString()).length;
    val = val < 1 ? 1 : val;

    if (val !== amount) {
      setAmount(val);
    }
  };

  return (
    <div className="container">
      <h1 title={title}>{name}</h1>
      <SlotsContainer amount={amount}/>
      <FormContainer onSetMaxValue={valueToAmount}/>
    </div>
  )
};

export default MainContainer
