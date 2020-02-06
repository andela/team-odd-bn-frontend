import { combineReducers } from 'redux';
import getAllBookingReducers from './getAllBookingReducers';
import viewSingleBooking from './viewSingleBooking';
import bookAccommodationReducer from './bookAccommodationReducer';

export default combineReducers({
  bookings: getAllBookingReducers,
  modal: viewSingleBooking,
  bookAccommodation: bookAccommodationReducer,
});
