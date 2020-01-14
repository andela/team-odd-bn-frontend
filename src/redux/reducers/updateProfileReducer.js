import {
  UPDATE_PROFILE_SUCCESS, UPDATE_PROFILE_ERROR, UPLOAD_IMAGE_SUCCESS, UPLOAD_IMAGE_ERROR, SPINNER_STATUS,
} from '../actionTypes/profileActionTypes';

const initialState = {
  message: null,
  updateProfileError: null,
  imageURL: null,
  imageURLError: null,
  spinner: null,
  spinnnerError: null,
};

const updateProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        message: action.payload,
      };
    case UPDATE_PROFILE_ERROR:
      return {
        ...state,
        updateProfileError: action.payload,
      };
    case UPLOAD_IMAGE_SUCCESS:
      return {
        ...state,
        imageURL: action.payload,
      };
    case UPLOAD_IMAGE_ERROR:
      return {
        ...state,
        imageURLError: action.payload,
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

export default updateProfileReducer;
