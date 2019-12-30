import { combineReducers } from 'redux';
import signupReducers from './signupReducers';
import signinReducer from './signinReducer';

export default combineReducers({
  signup: signupReducers,
  signin: signinReducer,
});
