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
    const getRandom = () => {
      const random =
        limits === null
          ? ''
          : getRandomInt(Number(limits.min), Number(limits.max));
      return random === '' ? '' : random.toString().padStart(amount, '0');
    };
    const getSlots = () => {
      const random = getRandom();
      let _slots: ReactElement[] = [];

      // tslint:disable-next-line:no-increment-decrement
      for (let i = 0; i < amount; i++) {
        const key = `slot${getRandomInt(0, 9999999)}`;
        const num = random === '' ? null : Number(random[i]);
        const tick = getRandomInt(3, 5);
        _slots = [
          ..._slots,
          <Slot
            key={key}
            amount={amount}
            index={i + 1}
            num={num}
            tick={tick}
          />,
        ];
      }

      return _slots;
    };

    setSlots(() => getSlots());
  }, [amount, limits]);

  return <div className="container container--flex">{slots}</div>;
};

export default SlotsContainer;
