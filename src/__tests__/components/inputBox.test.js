import React from 'react';
import { shallow } from 'enzyme';
import InputField from '../../components/InputField';
import { emailBox, passwordBox } from '../../constants/passwordReset';

describe('First React component test with Enzyme', () => {
  it('should call onChange prop', () => {
    expect(shallow(<InputField inputList={emailBox} />)).toMatchSnapshot();
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
