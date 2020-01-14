import { combineReducers } from 'redux';
import requestsReducers from './requestsReducers';
import roundTripReducers from '../roundTripReducer';

export default combineReducers({
  requests: requestsReducers,
  roundTrip: roundTripReducers,
});
