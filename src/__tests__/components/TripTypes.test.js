import React from 'react';
import { shallow } from 'enzyme';
import TripTypes from '../../components/trips/TripTypes';

describe('Trip Header Component test with Enzyme', () => {
  test('renders without crashing', () => {
    expect(
      shallow(
        <TripTypes />,
      ),
    ).toMatchSnapshot();
  });
  test('renders without crashing', () => {
    expect(shallow(<TripTypes />)).toMatchSnapshot();
  });
});
