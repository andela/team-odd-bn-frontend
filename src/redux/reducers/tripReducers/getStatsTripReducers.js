import {
  GET_STATS_TRIP_SUCCESS, GET_STATS_TRIP_ERROR, GET_STATS_INPUT, UPDATE_SPINNER_STATUS, TRIP_COUNTER_INPUT,
} from '../../actionTypes/getStatsActionTypes';
import initialState from '../../store/initialState';

const getStatsTripReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_STATS_TRIP_SUCCESS:

      return {
        ...state,
        getStatsData: action.payload.data,
      };
    case GET_STATS_TRIP_ERROR:
      return {
        ...state,
        payload: action.payload,
      };

    case GET_STATS_INPUT:
      return {
        ...state,
        getStatsInput: {
          ...state.getStatsInput,
          ...action.payload,
        },
      };

    case TRIP_COUNTER_INPUT:
      return {
        ...state,
        tripStatsCounter: action.payload,
      };
    default:
      return state;
  }
};

export default getStatsTripReducers;
