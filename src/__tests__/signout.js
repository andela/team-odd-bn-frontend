import React from 'react';
import { shallow } from 'enzyme';
import SignOut from '../containers/user/signout/signout';


describe('Test Signout page ', () => {
  it('should render', () => {
    const wrapper = shallow(<SignOut />);
    expect(wrapper.contains(<h1>Hello Logout</h1>)).toEqual(true);
  });
});
