import { combineReducers } from 'redux';
import socialAuth from './socialAuthReducer';
import authReducers from './authReducers';
import profileReducers from './ProfileReducers';
import updateProfileReducer from './updateProfileReducer';
import getAllUsersReducer from './getAllUsersReducers';
import signoutReducer from './signoutReducer';
import tripReducers from './tripReducers';
import getAllCitiesReducers from './getAllCitiesReducers';
import accommodationReducer from './accommodation';
import multicityReducer from './multicityReducer';
import adminReducer from './admin/adminReducer';
import PaginationReducer from './PaginationReducer';


export default combineReducers({
  viewProfile: profileReducers,
  updateProfile: updateProfileReducer,
  allUsers: getAllUsersReducer,
  socialAuth,
  auth: authReducers,
  signout: signoutReducer,
  trips: tripReducers,
  allCities: getAllCitiesReducers,
  accommodation: accommodationReducer,
  multicityTrip: multicityReducer,
  admin: adminReducer,
  pagination: PaginationReducer,
});
