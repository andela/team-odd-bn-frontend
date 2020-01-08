import { combineReducers } from 'redux';
import signupReducers from './signupReducers';

export default combineReducers({
  signup: signupReducers,
});
