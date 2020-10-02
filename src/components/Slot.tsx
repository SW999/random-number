import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useRef,
} from 'react';

const slotWidth = 103;
const calculateShift = (amount: number, index: number): string | 0 => {
  if (amount < 2) return 0;

  const isOdd = amount % 2 > 0;
  const slotsAverage = isOdd ? Math.ceil(amount / 2) : amount / 2;
  const shiftFactor = isOdd ? slotsAverage - index : slotsAverage - index + 0.5;
  return `${shiftFactor * slotWidth}px`;
};

export type SlotProps = {
  amount: number;
  index: number;
  num: number | null; // 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | null;
  tick: number; // 3 | 4 | 5 | 6;
};

const Slot: FunctionComponent<SlotProps> = ({ amount, index, num, tick }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const radius = useRef<number>(0);
  const rotateSlot = useCallback(index => {
    const angle = -36 * index;
    if (ref?.current) {
      ref.current.style.transform = `translateZ(-${radius.current}px) rotateX(${angle}deg)`;
    }
  }, []);
  const shift = calculateShift(amount, index);
  const style = {
    transform: `translateX(${shift})`,
  };

  useEffect(() => {
    if (ref?.current) {
      setTimeout(() => {
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
      }, 600);
    }
  }, [num, rotateSlot, tick]);

  useEffect(() => {
    if (ref?.current?.parentNode && shift !== 0) {
      (ref.current.parentNode as HTMLDivElement).removeAttribute('style');
    }
  }, [shift]);

  useEffect(() => {
    radius.current = Math.round(
      ref?.current?.offsetHeight / 2 / Math.tan(Math.PI / 10)
    );
  }, []);

  return (
    <div className="slot-wrapper" style={style}>
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
