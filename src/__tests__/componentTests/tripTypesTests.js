import React from 'react';
import { shallow } from 'enzyme';
import TripTypes from '../../components/trips/TripTypes';

describe('Verify email test suite', () => {
  test('renders without crashing', () => {
    expect(shallow(<TripTypes />)).toMatchSnapshot();
  });
});
