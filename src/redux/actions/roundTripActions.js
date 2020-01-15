import { toast } from 'react-toastify';
import { SPINNER_STATUS, CREATE_ROUND_TRIP_SUCCESS, CREATE_ROUND_TRIP_ERROR } from '../actionTypes/tripsActionTypes';
import apiCall from '../../helpers/apiCall';

export const updateSpinnerStatus = (value) => ({
  type: SPINNER_STATUS,
  spinner: value,
});

const createRoundTrip = (data) => async (dispatch) => {
  const API_URL = '/trips/twoWay';
  const HEADERS_REQUEST = {
    token: localStorage.getItem('token'),
  };

  try {
    const createRoundTripRequest = await apiCall.post(API_URL, data, { headers: HEADERS_REQUEST });
    dispatch(updateSpinnerStatus(false));
    toast.success('Round trip request made successfully');
    await dispatch({
      type: CREATE_ROUND_TRIP_SUCCESS,
      payload: createRoundTripRequest.data.message,
    });
  } catch (error) {
    const errorResponse = error.response.data.message;
    if (typeof (errorResponse) === 'object') {
      toast.error('Please ensure you have filled in all the fields');
    } else {
      toast.error(errorResponse);
    }
    dispatch(updateSpinnerStatus(false));
    return dispatch({
      type: CREATE_ROUND_TRIP_ERROR,
      payload: error.response.data,
    });
  }
};

export default createRoundTrip;
