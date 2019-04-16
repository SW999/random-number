import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';

describe('Header', () => {
  const app = shallow(<Header />);

  it('renders the title', () => {
    expect(app.find('h1').exists()).toBe(true);
  });
});
