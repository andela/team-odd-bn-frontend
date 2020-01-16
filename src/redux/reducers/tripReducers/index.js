import { combineReducers } from 'redux';
import requestsReducers from './requestsReducers';

export default combineReducers({
  requests: requestsReducers,
});
