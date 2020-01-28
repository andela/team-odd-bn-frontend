import { combineReducers } from 'redux';
import createAccommodation from './createAccommodationReducer';
import getMostTravelled from './getMostTravelledReducer';

export default combineReducers({
  createAccommodation,
  mostTravelled: getMostTravelled,
});
