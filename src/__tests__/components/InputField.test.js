import React from 'react';
import { shallow } from 'enzyme';
import InputField from '../../components/InputField';
import { signupInputs } from '../../constants/signUp';
import loginInputs from '../../constants/login';
describe('First React component test with Enzyme', () => {
  it('should call onChange prop for Login page', () => {
    expect(shallow(<InputField inputList={loginInputs} />)).toMatchSnapshot();
    const mockFn = jest.fn();
    const input = shallow(
      <InputField
        value=""
        placeholder=""
        inputList={[{ input: 'matched', className: 'matched' }]}
        handleChange={mockFn}
      />,
    );
    const cc = input.find('input');
    cc.simulate('change', { target: { value: 'matched' } });
    expect(mockFn.mock.calls[0][0]).toEqual({ matched: 'matched' });
  });

  it('should call onChange prop for signup', () => {
    expect(shallow(<InputField inputList={signupInputs} />)).toMatchSnapshot();
    const mockFn = jest.fn();
    const input = shallow(
      <InputField
        value=""
        placeholder=""
        inputList={[{ input: 'matched', className: 'matched' }]}
        handleChange={mockFn}
      />,
    );
    const cc = input.find('input');
    cc.simulate('change', { target: { value: 'matched' } });
    expect(mockFn.mock.calls[0][0]).toEqual({ matched: 'matched' });
  });
});
