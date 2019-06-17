import * as React from 'react';
import FormContainer from './FormContainer';
import SlotsContainer from './SlotsContainer';
import Header from '../components/Header';
interface MainContainerProps {
  title: string
  name: string | null
}
const MainContainer = ({ title, name }: MainContainerProps) => {
  const [amount, setAmount] = React.useState(1);

  const [limits, setLimits] = React.useState(null);

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
