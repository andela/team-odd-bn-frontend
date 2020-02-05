import { combineReducers } from 'redux';
import createAccommodation from './createAccommodationReducer';
import getMostTravelled from './getMostTravelledReducer';
import likeAndDislike from './likeAndDislikeReducer';

export default combineReducers({
  createAccommodation,
  mostTravelled: getMostTravelled,
  likeAndDislike,
});
