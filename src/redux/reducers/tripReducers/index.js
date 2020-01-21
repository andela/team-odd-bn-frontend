import { combineReducers } from 'redux';
import requestsReducers from './requestsReducers';
import roundTripReducers from '../roundTripReducer';
import onewayTrip from './onewayReducers';
import availRequestsReducer from './availRequestsReducers';
import approveRequestsReducers from './approveRequestsReducers';

export default combineReducers({
  requests: requestsReducers,
  roundTrip: roundTripReducers,
  tripRequests: onewayTrip,
  availRequests: availRequestsReducer,
  approveRequests: approveRequestsReducers,
});
