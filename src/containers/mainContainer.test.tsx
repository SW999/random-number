import React from 'react';
import { render } from '@testing-library/react';
import MainContainer from './MainContainer';

jest.mock('../utils', () => ({
  getRandomInt: () => 42,
  debounce: func => func,
}));

describe('MainContainer component', () => {
  it('MainContainer should take a snapshot', () => {
    const { asFragment } = render(<MainContainer />);

    expect(asFragment()).toMatchSnapshot('MainContainer');
  });
});
