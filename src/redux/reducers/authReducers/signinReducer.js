import {
  SIGNIN_SUCCESS,
  SIGNIN_INPUT,
  SIGNIN_ERROR,
  UPDATE_SPINNER_STATUS,
} from '../../actionTypes/authActionTypes';
import initialState from '../../store/initialState';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNIN_SUCCESS:
      return {
        ...state,
        signinData: action.payload,
      };
    case SIGNIN_INPUT:
      return {
        ...state,
        signinInputData: {
          ...state.signinInputData,
          ...action.payload,
        },
      };
    case SIGNIN_ERROR:
      return {
        ...state,
        signinError: action.payload,
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
