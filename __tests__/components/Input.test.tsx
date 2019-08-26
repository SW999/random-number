import * as React from 'react';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';
import Input from '../../src/Components/Input';

jest.useFakeTimers();

describe('Should render Input component and validate', () => {
  const wrapper = mount(<Input min={2} />);

  const input = wrapper.find('input');

  it('1. Should render an input field', () => {
    expect(input.exists()).toBe(true);
  });

  it('2. Should add validation message and hide then', () => {
    act(() => {
      wrapper.find('input').simulate('change', {target: {value: 'A string value'}});
    });

    act(() => {
      jest.advanceTimersByTime(1001);
    });

    expect(wrapper.find('.validation-text').text()).toEqual('Only positive integers are allowed');
    act(() => {
      jest.advanceTimersByTime(4001);
    });
    expect(wrapper.find('.validation-text').text()).toEqual('');
  });

  it('3. Should validate input less than min', () => {
    act(() => {
      input.props().value = 1;
      input.simulate('change');
    });

    act(() => {
      jest.advanceTimersByTime(1001);
    });

    expect(wrapper.find('.validation-text').text()).toEqual('Only positive integers are allowed');
    expect(wrapper.find('input').props().value).toEqual('');
  });

  it('4. Should leave correct input', () => {
    act(() => {
      input.props().value = 3;
      input.simulate('change');
    });

    act(() => {
      jest.advanceTimersByTime(1001);
    });

    expect(wrapper.find('.validation-text').text()).toEqual('');
    expect(input.props().value).toEqual('3');
  });

  it('4. Should clear value if min was changed and min > current value', () => {
    act(() => {
      input.props().value = 3;
      input.simulate('change');
    });

    act(() => {
      jest.advanceTimersByTime(1001);
    });
    expect(input.props().value).toEqual('3');

    act(() => {
      wrapper.setProps({ min: 5 });
    });
    expect(wrapper.find('input').props().value).toEqual('');
  });
});

describe('Should render Input component with default props', () => {
  const wrapper = mount(<Input min={2} />);
  const input =  wrapper.find('input');

  it('1. Should add validation message and hide then', () => {
    act(() => {
      input.simulate('change', {target: {value: 'A string value'}});
    });

    act(() => {
      jest.advanceTimersByTime(1001);
    });
    expect(wrapper.find('.validation-text').text()).toEqual('Only positive integers are allowed');

    act(() => {
      jest.advanceTimersByTime(4001);
    });
    expect(wrapper.find('.validation-text').text()).toEqual('');
  });

  it('2. Should validate input less than min', () => {
    act(() => {
      input.props().value = -1;
      input.simulate('change');
    });

    act(() => {
      jest.advanceTimersByTime(1001);
    });
    expect(wrapper.find('.validation-text').text()).toEqual('Only positive integers are allowed');
    expect(input.props().value).toEqual('');
  });

  it('3. Should leave correct input', () => {
    act(() => {
      wrapper.find('input').props().value = 3;
      wrapper.find('input').simulate('change');
    });

    act(() => {
      jest.advanceTimersByTime(1001);
    });
    expect(wrapper.find('.validation-text').text()).toEqual('');
    expect(wrapper.find('input').props().value).toEqual('3');
  });
});
