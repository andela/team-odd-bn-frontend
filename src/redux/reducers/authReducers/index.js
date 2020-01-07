import { combineReducers } from 'redux';
import signupReducers from './signupReducers';
import signinReducer from './signinReducer';
import resetPasswordReducers from './resetPasswordReducer';
import resendEmailReducer from './resendEmailReducer';

export default combineReducers({
  signup: signupReducers,
  signin: signinReducer,
  resetPassword: resetPasswordReducers,
  resendEmail: resendEmailReducer,
});
