import React, {
  useEffect,
  useRef,
  FunctionComponent,
  useCallback,
} from 'react';
export type SlotProps = {
  tick: number; // 3 | 4 | 5 | 6;
  num: number | null; // 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | null;
};

const Slot: FunctionComponent<SlotProps> = ({ num, tick }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const radius = useRef<number>(0);
  const rotateSlot = useCallback(index => {
    const angle = -36 * index;
    ref.current.style.transform = `translateZ(-${radius.current}px) rotateX(${angle}deg)`;
  }, []);

  useEffect(() => {
    radius.current = Math.round(
      ref?.current?.offsetHeight / 2 / Math.tan(Math.PI / 10)
    );
  }, []);

  useEffect(() => {
    if (ref?.current) {
      ref.current.style.transition = `transform .${tick}s`;

      if (num === null) {
        rotateSlot(0);
      } else {
        const maxCount = num + 10;
        const speed = tick * 100 + 30;
        let selectedIndex = 0;

        const interval = setInterval(() => {
          // tslint:disable-next-line:no-increment-decrement
          rotateSlot(++selectedIndex);

          if (selectedIndex === maxCount) {
            clearInterval(interval);
          }
        }, speed);
      }
    }
  }, [num, rotateSlot, tick]);

  return (
    <div className="slot-wrapper">
      <div className="slot" ref={ref}>
        {[...Array(10).keys()].map(key => (
          <div key={key} className="slot__cell">
            {key}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slot;
