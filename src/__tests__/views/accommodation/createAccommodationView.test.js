import React from 'react';
import { shallow } from 'enzyme';
import CreateAccommodationView from '../../../views/accommodation/createAccommodationView';

describe('Rendering create accommodation views', () => {
  test('should render ForgotPasswordView without crash', () => {
    const wrapper = shallow(<CreateAccommodationView />);
    expect(
      wrapper.find("[data-testid='createAccommodation-View']"),
    ).toHaveLength(1);
  });
});
