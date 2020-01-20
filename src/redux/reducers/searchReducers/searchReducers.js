import {
  SEARCH_RESULTS, SEARCH_KEY,
} from '../../actionTypes/searchActionTypes';


const searchReducer = (state = { key: '', payload: '' }, action) => {
  switch (action.type) {
    case SEARCH_RESULTS:
      return {
        ...state,
        payload: action.payload,
      };
    case SEARCH_KEY:
      return { ...state, key: action.key };
    default:
      return state;
  }
};

export default searchReducer;
