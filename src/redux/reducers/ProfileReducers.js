import { FETCH_PROFILE_SUCCESS, FETCH_PROFILE_ERROR, SPINNER_STATUS } from '../actionTypes/profileActionTypes';

const initialState = {
  profile: null,
  profileError: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROFILE_SUCCESS:
      return {
        ...state,
        profile: action.payload,
      };
    case FETCH_PROFILE_ERROR:
      return {
        ...state,
        profileError: action.payload,
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

export default profileReducer;
