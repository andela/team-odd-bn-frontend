import React from 'react';
import { shallow, mount } from 'enzyme';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import {
  tempViewAllBooking,
  initiaState,
  viewBookingsMockData,
} from '../../../__mocks__/booking/booking';
import rootReducer from '../../../redux/reducers/index';
import { ViewBookings } from '../../../containers/bookings/ViewBookings.js';


const middlewares = [thunk];
const testStore = (state) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
  return createStoreWithMiddleware(rootReducer, state);
};


describe('Expect to view bookings', () => {
  const wrapper = shallow(<ViewBookings {...viewBookingsMockData} />);
  it('should view all bookings successfully', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
