import React from 'react';
import { shallow } from 'enzyme';
import TripHeader from '../../components/trips/TripHeader';

describe('Trip Header Component test with Enzyme', () => {
  test('renders without crashing', () => {
    expect(
      shallow(
        <TripHeader />,
      ),
    ).toMatchSnapshot();
  });
  test('renders without crashing', () => {
    expect(shallow(<TripHeader />)).toMatchSnapshot();
  });
});
