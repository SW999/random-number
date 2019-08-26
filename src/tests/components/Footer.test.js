import React from 'react';
import { mount } from 'enzyme';
import Footer from '../../components/Footer';

describe('Should render Footer', () => {
  let wrapper;

  beforeAll(() => {
    // eslint-disable-next-line no-undef
    const root = global.document.createElement('div');
    root.setAttribute('id', 'footer');
    // eslint-disable-next-line no-undef
    const body = global.document.querySelector('body');
    body.appendChild(root);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('1. Should render span wrapper', () => {
    wrapper = mount(<Footer />);
    expect(wrapper.find('span').exists()).toBe(true);
  });

  it('2. Should render link inside', () => {
    wrapper = mount(<Footer />);
    expect(wrapper.find('a').exists()).toBe(true);
  });
});
