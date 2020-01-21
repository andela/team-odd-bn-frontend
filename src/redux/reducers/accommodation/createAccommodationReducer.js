import {
  OPEN_ROOMS_MODAL,
  NEW_ADDED_ROOMS,
  NEW_ADDED_PHOTOS,
  NEW_ACCOMMODATION_INPUT,
  GET_CITIES_SUCCESS,
  CREATE_ACCOMMODATION_SUCCESS,
  CREATE_ACCOMMODATION_ERROR,
  SPINNER_STATUS,
} from '../../actionTypes/accommodationActionTypes';

const initialState = {
  rooms: [],
  photos: [],
};

const createAccommodationReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_ROOMS_MODAL:
      return { ...state, openRoomsModal: action.openRoomsModal };
    case NEW_ADDED_ROOMS:
      return { ...state, rooms: [...state.rooms, action.rooms] };
    case NEW_ADDED_PHOTOS:
      return { ...state, photos: [...state.photos, action.photos] };
    case NEW_ACCOMMODATION_INPUT:
      return { ...state, ...action.payload };
    case GET_CITIES_SUCCESS:
      return { ...state, retrievedCities: action.retrievedCities };
    case CREATE_ACCOMMODATION_SUCCESS:
      return { ...state, payload: action.payload };
    case CREATE_ACCOMMODATION_ERROR:
      return { ...state, error: action.error };
    case SPINNER_STATUS:
      return { ...state, spinner: action.spinner };
    default:
      return state;
  }
};

export default createAccommodationReducer;
