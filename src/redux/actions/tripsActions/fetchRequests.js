import {
  FETCH_REQUESTS_SUCCESS,
  FETCH_REQUESTS_ERROR,
  FETCH_COMMENTS_SUCCESS,
  FETCH_SINGLE_REQUEST_SUCCESS,
} from '../../actionTypes/tripActionTypes';
import apiCall from '../../../helpers/apiCall';
import {
  notificationError,
  notificationSuccess,
} from '../../../helpers/notificationPopUp';

const errorProcessor = (error) => {
  let err = error.response
    ? error.response
    : (error.response = { data: { message: 'Ooops! Network Error' } });
  err = error.response.data.message
    ? error.response.data.message
    : error.response.data.error;
  err = typeof err === 'object' ? err : [err];
  return err;
};
export const spinnerStatusAction = () => ({
  type: 'UPDATE_SPINNER_STATUS',
  payload: {},
});
export const fetchRequestsAction = () => async (dispatch) => {
  try {
    const url = '/trips';
    const options = {
      headers: {
        token: localStorage.getItem('token'),
      },
    };
    const fetchRequestsResponse = await apiCall.get(url, options);
    dispatch({
      type: FETCH_REQUESTS_SUCCESS,
      payload: fetchRequestsResponse.data,
    });
  } catch (error) {
    const err = errorProcessor(error);
    err.map((e) => notificationError(e));
    dispatch({
      type: FETCH_REQUESTS_ERROR,
      payload: error.response.data,
    });
  }
};
export const fetchSingleRequestsAction = (tripRequestId) => async (dispatch) => {
  try {
    const url = `/trips/${tripRequestId}`;
    const options = {
      headers: {
        token: localStorage.getItem('token'),
      },
    };
    const fetchRequestsResponse = await apiCall.get(url, options);


    dispatch({
      type: FETCH_SINGLE_REQUEST_SUCCESS,
      payload: fetchRequestsResponse.data,
    });
  } catch (error) {
    const err = errorProcessor(error);
    err.map((e) => notificationError(e));
    dispatch({
      type: FETCH_REQUESTS_ERROR,
      payload: error.response.data,
    });
  }
};

export const fetchRequestCommentsAction = (tripRequestId) => async (dispatch) => {
  try {
    const url = `/trips/${tripRequestId}/comments`;
    const options = {
      headers: {
        token: localStorage.getItem('token'),
      },
    };
    const fetchRequestsResponse = await apiCall.get(url, options);

    dispatch({
      type: FETCH_COMMENTS_SUCCESS,
      payload: fetchRequestsResponse.data,
    });
  } catch (error) {
    const err = errorProcessor(error);
    err.map((e) => notificationError(e));
    dispatch({
      type: FETCH_REQUESTS_ERROR,
      payload: error.response.data,
    });
  }
};
