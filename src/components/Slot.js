import React, { useEffect, useState, useRef } from 'react';

const Slot = ({ tick = 4, num = null }) => {
  let ref = useRef(null);

  let selectedIndex = 0;
  let cellHeight = 0;
  let radius = 0;
  let speed = 430;

  const [errorMessage, setError] = useState('');

  useEffect(() => {
    cellHeight = ref.current.offsetHeight;
    radius = Math.round((cellHeight / 2) / Math.tan(Math.PI / 10));
    ref.current.style.transition = `transform .${tick}s`;
    speed = tick * 100 + 30;
  }, [tick]);

  useEffect(() => {
    propsValidation();

    if (num !== null) {
      const maxCount = 10 + Number(num);
      let interval = setInterval(() => {
        selectedIndex++;
        rotateSlot();

        if (selectedIndex >= maxCount) {
          clearInterval(interval);
        }
      }, speed);
    } else {
      selectedIndex = 0;
      rotateSlot();
    }
  }, [tick, num]);

  const rotateSlot = () => {
    if (ref.current) {
      const angle = -36 * selectedIndex;
      ref.current.style.transform = `translateZ(-${radius}px) rotateX(${angle}deg)`;
    }
  };

  const propsValidation = () => {
    if (num !== null && (num < 0 || num > 9)) {
      setError('Slot value should be in range [0, 9]');
    } else if (tick < 0) {
      setError('Slot tick should be nonnegative number');
    } else if (errorMessage !== '') {
      setError('');
    }
  };

  return errorMessage !== '' ?
    (<div className="error">{ errorMessage }</div>) :
    (
      <div className="slot-wrapper">
        <div className="slot" ref={ref}>
          <div className="slot__cell">0</div>
          <div className="slot__cell">1</div>
          <div className="slot__cell">2</div>
          <div className="slot__cell">3</div>
          <div className="slot__cell">4</div>
          <div className="slot__cell">5</div>
          <div className="slot__cell">6</div>
          <div className="slot__cell">7</div>
          <div className="slot__cell">8</div>
          <div className="slot__cell">9</div>
        </div>
      </div>
    )
};

export default Slot
