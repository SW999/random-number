import React, { useState, useEffect, useRef } from 'react';

interface SlotProps {
  key: string;
  tick: number;
  num: number | null;
}

const Slot = ({ tick = 4, num = null }: SlotProps) => {
  let ref = useRef<HTMLDivElement | null>(null);

  let selectedIndex = 0;
  let cellHeight = 0; // TODO: save to state
  let radius = 0; // TODO: save to state
  let speed = 430; // TODO: save to state

  const [errorMessage, setError] = useState('');

  useEffect(() => {
    if (ref.current) {
      cellHeight = ref.current.offsetHeight;
      radius = Math.round((cellHeight / 2) / Math.tan(Math.PI / 10));
      ref.current.style.transition = `transform .${tick}s`;
      speed = tick * 100 + 30;
    }
  }, [tick]);

  useEffect(() => {
    if (ref.current) {
      propsValidation();

      if (num !== null) {
        const maxCount = 10 + Number(num);
        let interval = setInterval(() => {
          selectedIndex++;
          rotateSlot(); // TODO: try to useMemo instead

          if (selectedIndex >= maxCount) {
            clearInterval(interval);
          }
        }, speed);
      } else {
        selectedIndex = 0;
        rotateSlot(); // TODO: try to useMemo instead
      }
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
