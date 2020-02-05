import * as types from '../../actionTypes/accommodationActionTypes';

const initialState = {
  likeDislikeError: null,
};

const likeAndDislike = (state = initialState, action) => {
  switch (action.type) {
    case types.LIKES_SUCCESS:
      return {
        ...state,
        payload: action.payload,
      };
    case types.DISLIKES_SUCCESS:
      return {
        ...state,
        payload: action.payload,
      };
    case types.LIKE_AND_DISLIKES_ERROR:
      return {
        ...state,
        likeDislikeError: action.payload,
      };
    default:
      return state;
  }
};

export default likeAndDislike;
