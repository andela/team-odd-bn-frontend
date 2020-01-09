import {
  PASSWORD_RESET_EMAIL,
  RESET_PASSWORD_INPUT,
  RESET_REQUEST_SUCCESS,
  RESET_PASSWORD_SUCCESS,
  ERROR, SPINNER_STATUS,
} from '../../actionTypes/authActionTypes';
import initialState from '../../store/initialState';

const resetPasswordReducer = (state = initialState, action) => {
  switch (action.type) {
    case PASSWORD_RESET_EMAIL:
      return {
        ...state,
        payload: action.payload,
      };
    case RESET_PASSWORD_INPUT:
      return {
        ...state,
        payload: action.payload,
      };
    case RESET_REQUEST_SUCCESS:
      return {
        ...state,
        payload: action.payload,
      };
    case RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        payload: action.payload,
      };
    case ERROR:
      return {
        ...state,
        status: action.status,
        error: action.error,
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

export default resetPasswordReducer;
