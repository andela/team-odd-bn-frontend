import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../components/footer';

describe('Footer', () => {
  const wrapper = shallow(<Footer />);

  it('should render without crash', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
