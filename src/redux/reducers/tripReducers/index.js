import { combineReducers } from 'redux';
import requestsReducers from './requestsReducers';
import roundTripReducers from '../roundTripReducer';
import onewayTrip from './onewayReducers';

export default combineReducers({
  requests: requestsReducers,
  roundTrip: roundTripReducers,
  tripRequests: onewayTrip,
});
