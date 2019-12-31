import { GET_ALL_USERS_SUCCESS, GET_ALL_USERS_ERROR } from '../actionTypes/profileActionTypes';

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
