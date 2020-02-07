import React from 'react';
import { shallow } from 'enzyme';
import NotFound from '../NotFound';


describe('Test Not Found page', () => {
  it('should render', () => {
    const wrapper = shallow(<NotFound />);
    expect(wrapper).toMatchSnapshot();
  });
});
