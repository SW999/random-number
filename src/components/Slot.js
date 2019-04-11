import React, { useEffect, useRef } from 'react';

const Slot = ({ delay, num = null }) => {
  let ref = useRef(null);

  let selectedIndex = 0;
  let cellHeight = 0;
  let radius = 0;
  let speed = 4;

  useEffect(() => {
    cellHeight = ref.current.offsetHeight;
    radius = Math.round((cellHeight / 2) / Math.tan(Math.PI / 10));
    ref.current.style.transition = `transform .${delay}s`;
    speed = delay * 100 + 30;
  }, [delay]);

  useEffect(() => {
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
  }, [delay, num]);

  const rotateSlot = () => {
    const angle = -36 * selectedIndex;
    ref.current.style.transform = `translateZ(-${radius}px) rotateX(${angle}deg)`;
  };

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
