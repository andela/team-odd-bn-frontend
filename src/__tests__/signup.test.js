import React from 'react';
import { shallow } from 'enzyme';
import Signup from '../containers/user/signup/signup';

let wrapper;

describe('Signup testing', () => {
  wrapper = shallow(<Signup />);
  it('Should render class', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
