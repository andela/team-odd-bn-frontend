import React from 'react';
import { shallow } from 'enzyme';
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
});
