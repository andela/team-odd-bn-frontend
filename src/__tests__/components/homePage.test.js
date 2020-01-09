import React from 'react';
import { shallow } from 'enzyme';
import HomePage from '../../components/HomePage';

describe('Test Dashboard Homepage page ', () => {
  it('should render', () => {
    const wrapper = shallow(<HomePage />);
    expect(shallow(<HomePage />)).toMatchSnapshot();
  });
});
