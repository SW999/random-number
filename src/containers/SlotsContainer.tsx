import * as React from 'react';
import Slot from '../components/Slot';
import { getRandomInt } from '../services/utils';
import {ReactElement} from "react";

interface SlotsContainerProps {
  amount: number,
  limits: null | { min: string | number, max: string | number }
}

const SlotsContainer = ({ amount = 1, limits = null }: SlotsContainerProps) => {
  const [slots, setSlots] = React.useState<null | Array<ReactElement>>(null);

  React.useEffect(() => {
    setSlots(() => getSlots());
  }, [amount, limits]);

  const getRandom = () => {
    let random = limits === null ? '' : getRandomInt(Number(limits.min), Number(limits.max));
    return random === '' ? '' : (random.toString()).padStart(amount, '0');
  };

  const getSlots = () => {
    const random = getRandom();
    let _slots: ReactElement[] = [];

    for (let i = 0; i < amount; i++) {
      const key = `slot${getRandomInt(0, 9999999)}`;
      const num = random === '' ? null : Number(random[i]);
      _slots = [ ..._slots, <Slot key={key} tick={getRandomInt(3, 6)} num={num} /> ];
    }

    return _slots;
  };

  return (
    <div className="container container-flex">
      { slots }
    </div>
  )
};

export default SlotsContainer
