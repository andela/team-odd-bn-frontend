import {
  SIGNUP_SUCCESS, SIGNUP_ERROR, SIGNUP_INPUT, UPDATE_SPINNER_STATUS,
} from '../../actionTypes/authActionTypes';
import initialState from '../../store/initialState';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_SUCCESS:
      return {
        ...state,
        signupData: action.payload,
      };
    case SIGNUP_ERROR:
      return {
        ...state,
        signupError: action.payload,
      };
    case SIGNUP_INPUT:
      return {
        ...state,
        signupInputData: {
          ...state.signupInputData,
          ...action.payload,
        },
      };
    case UPDATE_SPINNER_STATUS:
      return {
        ...state,
        spinnerStatus: action.payload,

      };
    default:
      return state;
  }
};

export default reducer;
