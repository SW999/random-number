import * as React from 'react';
import { mount } from 'enzyme';
import Footer from '../../src/Components/Footer';
import TestRenderer from 'react-test-renderer';
//import { createPortal } from 'react-dom';

describe('Should render Footer', () => {
  // @ts-ignore
  let wrapper;

  beforeAll(() => {
    // eslint-disable-next-line no-undef
    const root = document.createElement('div');
    root.setAttribute('id', 'footer');
    // eslint-disable-next-line no-undef
    const body = document.querySelector('body');
    body.appendChild(root);
  });

  afterEach(() => {
    //wrapper.unmount();
  });

  it('1. Should render span wrapper', () => {
    wrapper = TestRenderer.create(<Footer />);
    const wrapperInstance = wrapper.root;
    expect(wrapperInstance.findByType('span')).toBe(true);
  });

  it('2. Should render link inside', () => {
    wrapper = mount(<Footer />);
    expect(wrapper.find('a').exists()).toBe(true);
  });
});
