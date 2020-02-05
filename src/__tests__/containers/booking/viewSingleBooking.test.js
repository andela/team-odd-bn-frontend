import React from 'react';
import { shallow, mount } from 'enzyme';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { ViewSingleBooking, mapStateToProps } from '../../../containers/bookings/viewSingleBooking';
import {
  defaultProps, initiaState, tempViewAllBooking, viewBookingsMockData,
} from '../../../__mocks__/booking/booking';
import rootReducer from '../../../redux/reducers/index';

describe('Expect to view specific', () => {
  const wrapper = shallow(<ViewSingleBooking {...viewBookingsMockData} />);
  it('Should view specific booking', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Should simulate on handle submit', () => {
    const e = { preventDefault: () => '' };
    const removeTrip = jest.spyOn(wrapper.instance(), 'handleSubmit');
    wrapper.instance().handleSubmit(e, 0, 0);
    expect(removeTrip).toHaveBeenCalledWith(e, 0, 0);
  });


  it('Should close model', () => {
    const removeTrip = jest.spyOn(wrapper.instance(), 'closeModal');
    wrapper.instance().closeModal({ ...viewBookingsMockData });
    expect(removeTrip).toHaveBeenCalledWith({ ...viewBookingsMockData });
  });
});
