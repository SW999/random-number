import React, { useState, useEffect } from 'react';
import Slot from '../components/Slot';
import { getRandomInt } from '../services/utils';

const SlotsContainer = ({ amount = 1, limits = null }) => {
  const [slots, setSlots] = useState(null);

  useEffect(() => {
    setSlots(getSlots());
  }, [amount, limits]);

  const getSlots = () => {
    let random = limits === null ? -1 : getRandomInt(limits.min, limits.max);
    let _slots = [];
    let delta = 0;

    if (random > -1) { // TODO: simplify
      random = random.toString();
      delta = amount - random.length;
      if (delta > 0) {
        do {
          delta--;
          random = '0' + random;
        } while (delta > 0);
      }
    }

    for (let i = 0; i < amount; i++) {
      const key = 'slot' + getRandomInt(9999, 9999999);
      const delay = getRandomInt(3, 6);
      const num = random > -1 ? random[i] : null;
      _slots = [ ..._slots, <Slot key={key} delay={delay} num={num}/> ];
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
