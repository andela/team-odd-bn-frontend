/* eslint-disable import/no-duplicates */
import React from 'react';
import { shallow } from 'enzyme';
import { AvailableBookings, mapStateToProps } from '../../../containers/bookings/AvailableBookings';
import { RateBookingsMocks } from '../../../__mocks__/RatingMocks/BookingAccommodation';

describe('Expect to popup the rating form', () => {
  const wrapper = shallow(<AvailableBookings {...RateBookingsMocks} />);
  it('Rate form should render successfully', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('Rate form should open', () => {
    const findBtn = wrapper.find('.form-btn-open');
    findBtn.simulate('click');
    expect(findBtn).toBeTruthy();
  });

  it('Should mock booking form map state to props', () => {
    const result = mapStateToProps(RateBookingsMocks.state);
    expect(result).toEqual({ display: undefined });
  });
});
