import { SPINNER_STATUS, APPROVE_REQUEST_SUCCESS, APPROVE_REQUEST_ERROR } from '../../actionTypes/tripsActionTypes';

const initialState = {
  approveRequestMessage: null,
  approveRequestError: null,
  spinner: null,
  spinnnerError: null,
};

const approveRequestsReducer = (state = initialState, action) => {
  switch (action.type) {
    case APPROVE_REQUEST_SUCCESS:
      return {
        ...state,
        approveRequestMessage: action.payload,
        approveRequestError: null,
      };
    case APPROVE_REQUEST_ERROR:
      return {
        ...state,
        approveRequestMessage: action.payload,
        approveRequestError: null,
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

export default approveRequestsReducer;
