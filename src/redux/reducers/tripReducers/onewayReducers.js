import {
  ONEWAY_SUCCESS, GET_CITY_SUCCESS, ONEWAY_ERROR, ONEWAY_INPUT, UPDATE_SPINNER_STATUS,
} from '../../actionTypes/tripsActionType';
import initialState from '../../store/initialState';

const onewayTrip = (state = initialState, action) => {
  switch (action.type) {
    case GET_CITY_SUCCESS:
      return {
        ...state,
        getCity: action.payload.data,
      };
    case ONEWAY_SUCCESS:

      return {
        ...state,
        payload: action.payload,
      };
    case ONEWAY_ERROR:
      return {
        ...state,
        payload: action.payload,
      };

    case ONEWAY_INPUT:
      return {
        ...state,
        onewayInput: {
          ...state.onewayInput,
          ...action.payload,
        },
      };
    case UPDATE_SPINNER_STATUS:
      return {
        ...state,
        spinner: action.spinner,
      };
    default:
      return state;
  }
};

export default onewayTrip;
