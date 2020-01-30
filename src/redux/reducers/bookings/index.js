import { combineReducers } from 'redux';
import getAllBookingReducers from './getAllBookingReducers';

export default combineReducers({
  bookings: getAllBookingReducers,
});
