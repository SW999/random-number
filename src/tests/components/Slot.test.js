import React from 'react';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';
import Slot from '../../components/Slot';

jest.useFakeTimers();

describe('Should render Slot component', () => {
  const wrapper = mount(<Slot />);

  it('1. Should render a Slot', () => {
    expect(wrapper.find('.slot-wrapper').exists()).toBe(true);
  });

  it('2. Should set a default rotate angle is 0', () => {
    const slot = wrapper.find('.slot');

    expect(slot.instance().style.transform).toContain('rotateX(0deg)');
  });
});

describe('Final angle should depends on num prop', () => {
  it('1. Should set angle is -396deg for 1', () => {
    const wrapper = mount(<Slot num={1} />);
    const slot = wrapper.find('.slot');
    act(() => {
      jest.advanceTimersByTime(430 * 11);
    });
    expect(slot.instance().style.transform).toContain('rotateX(-396deg)');
  });

  it('2. Should set angle is -684deg for 9', () => {
    const wrapper = mount(<Slot num={9} />);
    const slot = wrapper.find('.slot');
    act(() => {
      jest.advanceTimersByTime(430 * 19);
    });
    expect(slot.instance().style.transform).toContain('rotateX(-684deg)');
  });
});

describe('Should validate props', () => {
  it('1. Should show Error for tick less than 0', () => {
    const wrapper = mount(<Slot tick={-1} />);

    expect(wrapper.find('.error').text()).toEqual('Slot tick should be nonnegative number');
  });

  it('2. Should show Error for num bigger than 9', () => {
    const wrapper = mount(<Slot num={10} />);

    expect(wrapper.find('.error').text()).toEqual('Slot value should be in range [0, 9]');
  });

  it('3. Should show Error for num less than 0', () => {
    const wrapper = mount(<Slot num={-1} />);

    expect(wrapper.find('.error').text()).toEqual('Slot value should be in range [0, 9]');
  });
});
