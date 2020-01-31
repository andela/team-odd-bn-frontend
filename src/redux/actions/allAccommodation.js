import * as types from '../actionTypes/accommodationActionTypes';
import apiCall from '../../helpers/apiCall';

export const returnData = (actioName, data) => ({
  type: actioName,
  payload: data,
});


export const getAllLikesDislikes = (data) => async (dispatch) => {
  const HEADERS_REQUEST = {
    token: localStorage.getItem('token'),
  };

  let getAllLikesDislikesContent = data.map(async (item) => {
    const API_URL_LIKES = `accommodations/${item.id}/likes`;
    const likesContent = await apiCall.get(API_URL_LIKES, { headers: HEADERS_REQUEST });
    const { data: contentLikesData } = likesContent.data;
    return contentLikesData;
  });
  getAllLikesDislikesContent = await Promise.all(getAllLikesDislikesContent);
  return dispatch(returnData(types.VIEW_ALL_LIKES_SUCCESS, getAllLikesDislikesContent));
};

export const viewActionAccommodation = () => async (dispatch) => {
  const HEADERS_REQUEST = {
    token: localStorage.getItem('token'),
  };
  const API_URL = '/accommodations';
  try {
    const getaccomodations = await apiCall.get(API_URL, { headers: HEADERS_REQUEST });
    const { data } = await getaccomodations.data;
    dispatch(getAllLikesDislikes(data));
    return dispatch(returnData(types.VIEW_ALL_ACCOMMODATION_SUCCESS, data));
  } catch (error) {
    if (error.response) {
      const { message } = error.response.data;

      return dispatch(returnData(types.VIEW_ALL_ACCOMMODATION_ERROR, { message }));
    }
    if (error.request) {
      return dispatch(returnData(types.VIEW_ALL_ACCOMMODATION_ERROR, ['Network Error']));
    }
    return dispatch(returnData(types.VIEW_ALL_ACCOMMODATION_ERROR, ['Server Error']));
  }
};
