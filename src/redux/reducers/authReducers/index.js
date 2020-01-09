import { combineReducers } from 'redux';
import signupReducers from './signupReducers';
import signinReducer from './signinReducer';
import resetPasswordReducers from './resetPasswordReducer';
import verifyEmailReducer from './verifyEmailReducer';

export default combineReducers({
  signup: signupReducers,
  signin: signinReducer,
  resetPassword: resetPasswordReducers,
  verifyEmail: verifyEmailReducer,
});
