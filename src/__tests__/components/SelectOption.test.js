import React from 'react';
import { shallow } from 'enzyme';
import SelectOption from '../../components/SelectOption';
import { options } from '../../__mocks__/admin/admin';

describe('Test suite for Select option component', () => {
  it('should call onChange prop for signup', () => {
    const mockFn = jest.fn();
    expect(
      shallow(
        <SelectOption
          classname="SelectOption"
          options={options}
          email="me@you.com"
          handleChange={mockFn}
        />,
      ),
    ).toMatchSnapshot();
    const select = shallow(
      <SelectOption
        classname="SelectOption"
        options={options}
        email="me@you.com"
        handleChange={mockFn}
      />,
    );
    const cc = select.find('[data-test="selectOption-test"]');
    cc.simulate('change', { target: { value: 'user' } });
    expect(mockFn.mock.calls[0][0]).toEqual('user');
  });
});
