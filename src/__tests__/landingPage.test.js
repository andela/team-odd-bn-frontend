import React from 'react';
import { shallow } from 'enzyme';
import LandingPage from '../components/LandingPage';

describe('Test Signout page ', () => {
  it('should render', () => {
    const wrapper = shallow(<LandingPage />);
    expect(shallow(<LandingPage />)).toMatchSnapshot();
  });
});
