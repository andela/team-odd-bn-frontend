import {
  PAGENO,
  ITEMSPERPAGE,
} from '../actionTypes/PaginationActionTypes';
import initialState from '../store/initialState';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case PAGENO:
      return {
        ...state,
        pageNo: action.payload,
      };
    case ITEMSPERPAGE:
      return {
        ...state,
        itemsPerPage: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
