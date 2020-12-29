import React, {
  FunctionComponent,
  ReactElement,
  useEffect,
  useState,
} from 'react';
import Slot from '../components/Slot';
import { getRandomInt } from '../utils';

interface SlotsContainerProps {
  amount: number;
  limits: null | { min: string | number; max: string | number };
}

const SlotsContainer: FunctionComponent<SlotsContainerProps> = ({
  amount = 1,
  limits,
}) => {
  const [slots, setSlots] = useState<null | ReactElement[]>(null);

  useEffect(() => {
    if (limits === null) {
      setSlots([<Slot key={0} />]);
      return;
    }

    const random = getRandomInt(Number(limits.min), Number(limits.max))
      .toString()
      .padStart(amount, '0');

    let _slots: ReactElement[] = [];

    for (let i = 0; i < amount; i += 1) {
      const num = Number(random[i]);
      const key = `slot${num}${i}`;
      const tick = getRandomInt(3, 5);
      _slots = [
        ..._slots,
        <Slot key={key} amount={amount} index={i + 1} num={num} tick={tick} />,
      ];
    }

    setSlots(_slots);
  }, [amount, limits]);

  return <div className="container container--flex">{slots}</div>;
};

export default SlotsContainer;
