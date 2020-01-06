import { combineReducers } from 'redux';
import socialAuth from './socialAuthReducer';
import authReducers from './authReducers';
import profileReducers from './ProfileReducers';

export default combineReducers({
  socialAuth,
  auth: authReducers,
  viewProfile: profileReducers,
});
