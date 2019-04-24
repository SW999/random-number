import React, { useState, useEffect } from 'react';
import Slot from '../components/Slot';
import { getRandomInt } from '../services/utils';

const SlotsContainer = ({ amount = 1, limits = null }) => {
  const [slots, setSlots] = useState(null);

  useEffect(() => {
    setSlots(_ => getSlots());
  }, [amount, limits]);

  const getSlots = () => {
    let random = limits === null ? '' : getRandomInt(limits.min, limits.max);
    let _slots = [];

    if (random !== '') {
      random = (random.toString()).padStart(amount, '0');
    }

    for (let i = 0; i < amount; i++) {
      const key = `slot${getRandomInt(0, 9999999)}`;
      const tick = getRandomInt(3, 6);
      const num = random === '' ? null : random[i];
      _slots = [ ..._slots, <Slot key={key} tick={tick} num={num}/> ];
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
