import { combineReducers } from 'redux';
import requestsReducers from './requestsReducers';
import roundTripReducers from '../roundTripReducer';
import availRequestsReducer from './availRequestsReducers';
import approveRequestsReducers from './approveRequestsReducers';

export default combineReducers({
  requests: requestsReducers,
  roundTrip: roundTripReducers,
  availRequests: availRequestsReducer,
  approveRequests: approveRequestsReducers,
});
