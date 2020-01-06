import React from 'react';
import { shallow } from 'enzyme';
import InputField from '../../components/InputField';
import { signupInputs } from '../../constants/signUp';
import loginInputs from '../../constants/login';
import SelectCities from '../../components/trips/SelectCities';
import selectInputs from '../../constants/selectCities';
import { onewayDateInputs } from '../../constants/DateFieldInput';
import DateFields from '../../components/trips/DateFields';

describe('First React component test with Enzyme', () => {
  it('should renders Date Input component', () => {
    expect(shallow(<DateFields dateFieldName={onewayDateInputs} />)).toMatchSnapshot();
    const mockFn = jest.fn();
    const input = shallow(
      <DateFields
        dateFieldName={[{
          type: 'date', name: 'startDate', data_test: 'startDate', FieldName: 'Start date',
        }]}
        handleChange={mockFn}
      />,
    );
    const cc = input.find('input');
    cc.simulate('change', { target: { value: 'matched' } });
    expect(mockFn.mock.calls[0][0]).toEqual({ startDate: 'matched' });
  });
  it('should renders Select Input component', () => {
    expect(shallow(<SelectCities inputName={selectInputs} />)).toMatchSnapshot();
    const mockFn = jest.fn();
    const input = shallow(
      <SelectCities
        inputName={[{
          className: 'originCity', name: 'originId', PlaceHolderName: 'Your Origin', value: 'originId',
        }]}
        handleChange={mockFn}
      />,
    );
    const cc = input.find('select');
    cc.simulate('change', { target: { value: 'matched' } });
    expect(mockFn.mock.calls[0][0]).toEqual({ originId: 'matched' });
  });
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
