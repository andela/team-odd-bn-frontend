import { GET_ALL_CITIES_ERROR, GET_ALL_CITIES_SUCCESS } from '../actionTypes/tripsActionTypes';

const initialState = {
  cities: null,
  citiesError: null,
};

const citiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CITIES_SUCCESS:
      return {
        ...state,
        cities: action.payload,
      };
    case GET_ALL_CITIES_ERROR:
      return {
        ...state,
        citiesError: action.payload,
      };
    default:
      return state;
  }
};

export default citiesReducer;
