import React from 'react';
import Slot from '../components/Slot';
import { getRandomInt } from '../services/getRandomIntagerInRange';

const SlotsContainer = ({ amount = 1 }) => {
  const getSlots = () => {
    let slots = [];
    for (let i = 0; i < amount; i++) {
      const key = 'slot' + getRandomInt(9999, 9999999);
      slots = [...slots, <Slot key={key}/>];
    }
    return slots;
  };

  return (
    <div className="container container-flex">
      {getSlots()}
    </div>
  )
};

export default SlotsContainer
