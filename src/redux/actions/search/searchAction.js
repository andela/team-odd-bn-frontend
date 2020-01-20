/* eslint-disable import/prefer-default-export */
import {
  SEARCH_RESULTS,
  SEARCH_KEY,
} from '../../actionTypes/searchActionTypes';

export const searchResults = (data) => ({
  type: SEARCH_RESULTS,
  payload: data,
});
export const searchKey = (key) => ({
  type: SEARCH_KEY,
  key,
});
