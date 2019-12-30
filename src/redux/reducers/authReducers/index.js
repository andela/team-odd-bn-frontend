import { combineReducers } from 'redux';
import signupReducers from './signupReducers';
import signinReducer from './signinReducer';
import resetPasswordReducers from './resetPasswordReducer';

export default combineReducers({
  signup: signupReducers,
  signin: signinReducer,
  resetPassword: resetPasswordReducers,
});
