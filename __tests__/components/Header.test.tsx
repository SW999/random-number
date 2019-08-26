import * as React from 'react';
import { shallow } from 'enzyme';
import Header from '../../src/Components/Header';

describe('Header should contains H1', () => {
  const app = shallow(<Header name='' title='' />);

  it('Renders the title', () => {
    expect(app.find('h1').exists()).toBe(true);
  });
});
