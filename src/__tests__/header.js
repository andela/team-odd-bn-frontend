import React from 'react';
import { shallow } from 'enzyme';
import Header from '../components/header';
import { menu } from '../constants/passwordReset';

describe('Header', () => {
  const wrapper = shallow(<Header menuList={menu} />);

  it('should render without crash', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should display Barefoot', () => {
    const findParagraph = wrapper.find('.app-name');
    expect(findParagraph.text()).toBe('Barefoot');
  });
});
