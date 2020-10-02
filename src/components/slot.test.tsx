import React from 'react';
import { render } from '@testing-library/react';
import Slot from './Slot';

const mockedProps = {
  amount: 1,
  index: 1,
  num: null,
  tick: 3,
};

describe('Slot component', () => {
  it('Slot should take a snapshot for initial state', () => {
    const { asFragment } = render(<Slot {...mockedProps} />);

    expect(asFragment()).toMatchSnapshot('Slot initial');
  });

  it('Slot should take a snapshot', () => {
    const { asFragment } = render(<Slot {...mockedProps} amount={2} />);

    expect(asFragment()).toMatchSnapshot('Slot');
  });
});
