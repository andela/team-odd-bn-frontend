import {
  SEARCH_RESULTS, SEARCH_KEY, SEARCH_INPUT,
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
    case SEARCH_INPUT:
      return { ...state, input: action.input };
    default:
      return state;
  }
};

export default searchReducer;
