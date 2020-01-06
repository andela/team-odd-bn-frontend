import React from 'react';
import { shallow } from 'enzyme';
import SelectCities from '../../components/trips/SelectCities';
import selectInputs from '../../constants/selectCities';

describe('First React component test with Enzyme', () => {
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
});
