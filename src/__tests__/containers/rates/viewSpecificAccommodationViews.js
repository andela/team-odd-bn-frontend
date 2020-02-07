import React from 'react';
import { shallow } from 'enzyme';
import {
  viewSpecificAccommodationViewsMocks,
  mapStateToProspReviews
} from '../../../__mocks__/RatingMocks/BookingAccommodation';
import {
  ViewSpecificAccommodation,
  mapStateToProps,
} from '../../../views/accommodation/ViewSpecificAccommodation';

describe('Expect to view specific details information', () => {
  const wrapper = shallow(<ViewSpecificAccommodation {...viewSpecificAccommodationViewsMocks} />);
  it('Should view specific accommodation', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('Expect to view data from map state to props', () => {
    const result = mapStateToProps(mapStateToProspReviews.state);
    expect(result).toEqual({ accommodationItem: { rates: 'accommodation items follows' } });
  });
});
