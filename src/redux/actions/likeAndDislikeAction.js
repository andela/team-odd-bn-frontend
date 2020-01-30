import * as types from '../actionTypes/accommodationActionTypes';
import apiCall from '../../helpers/apiCall';

const likeDislikeError = (data) => ({
  type: types.LIKE_AND_DISLIKES_ERROR,
  payload: data,
});
export const likeAction = ({ id }) => async (dispatch) => {
  try {
    const options = {
      headers: {
        token: localStorage.getItem('token'),
      },
      content_type: 'application/json',
    };

    const likeResponse = await apiCall.post(`/accommodations/${id}?like=${true}`, '', options);

    dispatch({
      type: types.LIKES_SUCCESS,
      payload: likeResponse.data,
    });
  } catch (err) {
    return dispatch(likeDislikeError('Server Error'));
  }
};

export const dislikeAction = ({ id }) => async (dispatch) => {
  try {
    const options = {
      headers: {
        token: localStorage.getItem('token'),
      },
      content_type: 'application/json',
    };
    const disLikeResponse = await apiCall.post(`/accommodations/${id}?like=${false}`, '', options);

    dispatch({
      type: types.DISLIKES_SUCCESS,
      payload: disLikeResponse.data,
    });
  } catch (err) {
    return dispatch(likeDislikeError('Server Error'));
  }
};
