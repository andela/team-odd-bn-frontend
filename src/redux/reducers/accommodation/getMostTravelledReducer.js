import { SPINNER_STATUS, GET_MOST_TRAVELLED_ERROR, GET_MOST_TRAVELLED_SUCCESS } from '../../actionTypes/accommodationActionTypes';

const initialState = {
  mostTravelled: null,
  mostTravelledError: null,
};

const mostTravelledReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOST_TRAVELLED_SUCCESS:
      return {
        ...state,
        mostTravelled: action.payload,
        mostTravelledError: null,
      };
    case GET_MOST_TRAVELLED_ERROR:
      return {
        ...state,
        mostTravelled: null,
        mostTravelledError: action.payload,
      };
    case SPINNER_STATUS:
      return {
        ...state,
        spinner: action.spinner,
      };
    default:
      return state;
  }
};

export default mostTravelledReducer;
