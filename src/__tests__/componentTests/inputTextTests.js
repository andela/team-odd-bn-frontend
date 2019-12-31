import React from 'react';
import { shallow } from 'enzyme';
import TextInput from '../../components/common/TextInput';


describe('Test Text Input page', () => {
  it('should render', () => {
    const wrapper = shallow(<TextInput placeholder="Please Input your first name" name="firstName" />);
    expect(wrapper.find('input')).toHaveLength(1);
  });
});
