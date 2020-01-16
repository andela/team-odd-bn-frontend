import {
  FETCH_REQUESTS_SUCCESS, FETCH_REQUESTS_ERROR, FETCH_COMMENTS_SUCCESS, FETCH_SINGLE_REQUEST_SUCCESS,
} from '../../actionTypes/tripActionTypes';
import initialState from '../../store/initialState';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQUESTS_SUCCESS:
      return {
        ...state,
        requestsData: action.payload,
      };
    case FETCH_SINGLE_REQUEST_SUCCESS:
      return {
        ...state,
        singleRequestData: action.payload,
      };
    case FETCH_COMMENTS_SUCCESS:
      return {
        ...state,
        requestCommentsData: action.payload,
      };
    case FETCH_REQUESTS_ERROR:
      return {
        ...state,
        requestsError: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
