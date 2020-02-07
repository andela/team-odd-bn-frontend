/* eslint-disable import/no-duplicates */
import React from 'react';
import { shallow } from 'enzyme';
import { ViewSpecificAccommodation } from '../../../containers/accommodation/ViewSpecificAccommodation';
import {
  viewSpecificAccommodationMocks,
  noSpecificAccommodationMocks,
} from '../../../__mocks__/RatingMocks/BookingAccommodation';


describe('Expect to view specific accommodation', () => {
  it('Should render specific accommodation successfully', () => {
    const wrapper = shallow(<ViewSpecificAccommodation {...viewSpecificAccommodationMocks} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Should not continue if no specific accommodation available', () => {
    const wrapper = shallow(<ViewSpecificAccommodation {...noSpecificAccommodationMocks} />);
    expect(wrapper).toMatchSnapshot();
  });
});
