import {
  MARK_ONE_AS_READ_SUCCESS, MARK_ONE_AS_READ_ERROR,
} from '../../actionTypes/notificationActionTypes';

const initialState = {
  markOne: null,
  markOneError: null,
};

const markOneAsReadReducer = (state = initialState, action) => {
  switch (action.type) {
    case MARK_ONE_AS_READ_SUCCESS:
      return {
        ...state,
        markOne: action.payload,
      };
    case MARK_ONE_AS_READ_ERROR:
      return {
        ...state,
        markOneError: action.payload,
      };
    default:
      return state;
  }
};

export default markOneAsReadReducer;
