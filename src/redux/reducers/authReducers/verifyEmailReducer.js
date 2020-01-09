import {
  RESEND_VERIFICATION_EMAIL,
  RESEND_EMAIL_SUCCESS,
  ERROR,
  SPINNER_STATUS,
  IS_EMAIL_VERIFIED,
} from '../../actionTypes/authActionTypes';
import initialState from '../../store/initialState';

const verifyEmailReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESEND_VERIFICATION_EMAIL:
      return {
        ...state,
        payload: action.payload,
      };
    case RESEND_EMAIL_SUCCESS:
      return {
        ...state,
        payload: action.payload,
      };
    case IS_EMAIL_VERIFIED:
      return {
        ...state,
        isEmailVerified: action.isEmailVerified,
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

export default verifyEmailReducer;
