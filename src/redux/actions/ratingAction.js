import * as types from '../actionTypes/ratesActionTypes';
import apiCall from '../../helpers/apiCall';
import { notificationSuccess, notificationError } from '../../helpers/notificationPopUp';

export const inputData = (type, data) => ({
  type,
  payload: data,
});

export const onEditInputAction = (data) => async (dispatch) => {
  dispatch(inputData(types.ADD_ACCOMMODATION_RATE_INPUT, data));
};

export const submitRatingAction = (data) => async (dispatch) => {
  const Option = {
    headers: {
      token: localStorage.getItem('token'),
    },
  };
  const { starRateInput, feedbackInput, accommodationId } = data;
  const submitRating = {
    rating: starRateInput,
    review: feedbackInput,
    accommodationId,
  };

  try {
    const submitRatingData = await apiCall.post('accommodations/ratings', submitRating, Option);
    notificationSuccess(submitRatingData.data.message);
    return dispatch(inputData(types.RATE_ACCOMMODATION_SUCCESS, { submitSucces: true }));
  } catch (error) {
    if (error.response) {
      const { message } = error.response.data;
      notificationError(error.response.data.message);
      return dispatch(inputData(types.RATE_ACCOMMODATION_ERROR, { ratingError: message }));
    }
    if (error.request) {
      notificationError('Network Error');
      return dispatch(inputData(types.RATE_ACCOMMODATION_ERROR, { ratingError: 'Network Error' }));
    }
    notificationError('Server Error');
    return dispatch(inputData(types.RATE_ACCOMMODATION_ERROR, { message: 'Server Error' }));
  }
};
