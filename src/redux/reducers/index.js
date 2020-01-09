import { combineReducers } from 'redux';
import socialAuth from './socialAuthReducer';
import authReducers from './authReducers';
import profileReducers from './ProfileReducers';
import notificationReducers from './notificationReducers';


export default combineReducers({
  socialAuth,
  auth: authReducers,
  viewProfile: profileReducers,
  notification: notificationReducers,
});
