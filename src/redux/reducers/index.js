import { combineReducers } from 'redux';
import socialAuth from './socialAuthReducer';
import authReducers from './authReducers';
import profileReducers from './ProfileReducers';
import updateProfileReducer from './updateProfileReducer';
import getAllUsersReducer from './getAllUsersReducers';

export default combineReducers({
  viewProfile: profileReducers,
  updateProfile: updateProfileReducer,
  allUsers: getAllUsersReducer,
  socialAuth,
  auth: authReducers,
});
