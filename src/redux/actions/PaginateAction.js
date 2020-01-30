import {
  PAGENO,
  ITEMSPERPAGE,
} from '../actionTypes/PaginationActionTypes';
export const changePageNo = (data) => ({
  type: PAGENO,
  payload: data,
});
export const changeItemsPerPage = (data) => ({
  type: ITEMSPERPAGE,
  payload: data,
});
