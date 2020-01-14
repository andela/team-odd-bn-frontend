import { SPINNER_STATUS, CREATE_ROUND_TRIP_ERROR, CREATE_ROUND_TRIP_SUCCESS } from '../actionTypes/tripsActionTypes';

const initialState = {
  roundTripMessage: null,
  roundTripError: null,
  spinner: null,
  spinnnerError: null,
};

const createRoundTripReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ROUND_TRIP_SUCCESS:
      return {
        ...state,
        roundTripMessage: action.payload,
      };
    case CREATE_ROUND_TRIP_ERROR:
      return {
        ...state,
        roundTripError: action.payload,
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

export default createRoundTripReducer;
