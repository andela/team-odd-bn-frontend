import { SPINNER_STATUS, AVAIL_REQUESTS_SUCCESS, AVAIL_REQUESTS_ERROR } from '../../actionTypes/tripsActionTypes';

const initialState = {
  allRequests: null,
  allRequestsError: null,
  spinner: null,
  spinnnerError: null,
};

const availRequestsReducer = (state = initialState, action) => {
  switch (action.type) {
    case AVAIL_REQUESTS_SUCCESS:
      return {
        ...state,
        allRequests: action.payload,
        allRequestsError: null,
      };
    case AVAIL_REQUESTS_ERROR:
      return {
        ...state,
        allRequests: action.payload,
        allRequestsError: null,
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

export default availRequestsReducer;
