import React, { useEffect, useRef, FunctionComponent, useCallback } from 'react';

type SlotProps = {
  tick: 3 | 4 | 5 | 6;
  num: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | null;
}

const Slot: FunctionComponent<SlotProps> = ({ tick, num }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  let radius = 0;

  useEffect(() => {
    if (ref.current) {
      radius = Math.round((ref.current.offsetHeight / 2) / Math.tan(Math.PI / 10));
      ref.current.style.transition = `transform .${tick}s`;

      if (num === null) {
        rotateSlot(0);
      } else {
        const maxCount = num + 10;
        const speed = tick * 100 + 30;
        let selectedIndex = 0;

        let interval = setInterval(() => {
          rotateSlot(++selectedIndex);

          if (selectedIndex === maxCount) {
            clearInterval(interval);
          }
        }, speed);
      }
    }
  }, [num]);

  const rotateSlot = useCallback((index) => {
    const angle = -36 * index;
    ref.current.style.transform = `translateZ(-${radius}px) rotateX(${angle}deg)`;
  }, []);

  return (
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
