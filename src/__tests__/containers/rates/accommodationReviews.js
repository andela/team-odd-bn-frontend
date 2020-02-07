/* eslint-disable import/no-duplicates */
import React from 'react';
import { shallow } from 'enzyme';
import {
  AccommodationReviews,
  mapStateToProps,
} from '../../../views/accommodation/AccommodationReviews';
import {
  accommodationReviewsMocks,
  emptyAccommodationReviewsMocks,
  mapStateToProspReviews,
} from '../../../__mocks__/RatingMocks/BookingAccommodation';


describe('Expect to view accommodation reviews', () => {
  it('Should render specific accommodation with reviews successfully', () => {
    const wrapper = shallow(<AccommodationReviews {...accommodationReviewsMocks} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Should not continue if review for specific accommodation is not available', () => {
    const wrapper = shallow(<AccommodationReviews {...emptyAccommodationReviewsMocks} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Shoud review accommodation from map state to propps', () => {
    const result = mapStateToProps(mapStateToProspReviews.state);
    expect(result).toEqual({ accommodationItem: { rates: 'accommodation items follows' } });
  });
});
