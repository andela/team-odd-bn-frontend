import {
  GET_ALL_USERS_SUCCESS,
  PAGINATION, GET_ALL_USERS_ERROR,
} from '../actionTypes/profileActionTypes';

const initialState = {
  users: null,
  usersError: null,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
        paginatedRequest: action.payload.data.slice(0, 5),
      };
    case PAGINATION:
      return {
        ...state,
        paginatedRequest: action.payload.currentPage,
        paginationStart: action.payload.paginationStart,
        paginationEnd: action.payload.paginationEnd,
      };
    case GET_ALL_USERS_ERROR:
      return {
        ...state,
        usersError: action.payload,
      };
    default:
      return state;
  }
};

export default usersReducer;
