import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';

describe('Header should contains H1', () => {
  const app = shallow(<Header />);

  it('Renders the title', () => {
    expect(app.find('h1').exists()).toBe(true);
  });
});
