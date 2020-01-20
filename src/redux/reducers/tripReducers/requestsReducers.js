import {
  FETCH_REQUESTS_SUCCESS,
  UPDATE_COMMENT_INPUT,
  CREATE_COMMENT_SUCCESS,
  CREATE_COMMENT_ERROR,
  FETCH_REQUESTS_ERROR,
  FETCH_COMMENTS_SUCCESS,
  FETCH_SINGLE_REQUEST_SUCCESS,
  DELETE_COMMENT_SUCCESS,
  DELETE_COMMENT_ERROR,
  PAGINATION,
} from '../../actionTypes/tripActionTypes';
import initialState from '../../store/initialState';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case PAGINATION:
      return {
        ...state,
        paginatedRequest: action.payload.currentPage,
        paginationStart: action.payload.paginationStart,
        paginationEnd: action.payload.paginationEnd,
      };
    case FETCH_REQUESTS_SUCCESS:
      return {
        ...state,
        paginatedRequest: action.payload.data.slice(0, 5),
        requestsData: action.payload,
      };
    case CREATE_COMMENT_SUCCESS:
      return {
        ...state,
        postCommentData: action.payload,
      };
    case CREATE_COMMENT_ERROR:
      return {
        ...state,
        postCommentError: action.payload,
      };
    case UPDATE_COMMENT_INPUT:
      return {
        ...state,
        postCommentInput: { ...state.postCommentInput, ...action.payload },
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
    case DELETE_COMMENT_ERROR:
      return {
        ...state,
        deleteCommentError: action.payload,
      };
    case DELETE_COMMENT_SUCCESS:
      return {
        ...state,
        deleteCommentSuccess: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
