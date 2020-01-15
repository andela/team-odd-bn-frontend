import React from 'react';
import { shallow } from 'enzyme';
import TripHeader from '../../components/trips/TripHeader';

describe('Verify email test suite', () => {
  test('renders without crashing', () => {
    expect(shallow(<TripHeader />)).toMatchSnapshot();
  });
});
