import React from 'react';
import { shallow } from 'enzyme';
import Dashboard from '../../views/Dashboard';

describe('First React component test with Enzyme', () => {
  test('renders without crashing', () => {
    expect(shallow(<Dashboard />)).toMatchSnapshot();
  });
});
