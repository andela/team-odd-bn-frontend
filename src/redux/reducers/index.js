import { combineReducers } from 'redux';
import socialAuth from './socialAuthReducer';
import authReducers from './authReducers';

export default combineReducers({
  socialAuth,
  auth: authReducers,
});
