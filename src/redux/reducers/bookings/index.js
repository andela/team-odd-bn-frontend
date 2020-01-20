import { combineReducers } from 'redux';
import getAllBookingReducers from './getAllBookingReducers';
import viewSingleBooking from './viewSingleBooking';

export default combineReducers({
  bookings: getAllBookingReducers,
  modal: viewSingleBooking,
});
