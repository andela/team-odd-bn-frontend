import React from 'react';
import { shallow } from 'enzyme';
import Dashboard from '../views/Dashboard/index';

let wrapper;

describe('Dashboard testing', () => {
  wrapper = shallow(<Dashboard />);
  it('Should render class', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
