import {
  MARK_ALL_AS_READ_SUCCESS, MARK_ALL_AS_READ_ERROR,
} from '../../actionTypes/notificationActionTypes';

const initialState = {
  markAll: null,
  markAllError: null,
};

const markAllAsReadReducer = (state = initialState, action) => {
  switch (action.type) {
    case MARK_ALL_AS_READ_SUCCESS:
      return {
        ...state,
        markAll: action.payload,
      };
    case MARK_ALL_AS_READ_ERROR:
      return {
        ...state,
        markAllError: action.payload,
      };
    default:
      return state;
  }
};

export default markAllAsReadReducer;
