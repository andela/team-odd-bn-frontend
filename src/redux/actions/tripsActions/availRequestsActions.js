import { toast } from 'react-toastify';
import { SPINNER_STATUS, AVAIL_REQUESTS_ERROR, AVAIL_REQUESTS_SUCCESS } from '../../actionTypes/tripsActionTypes';
import apiCall from '../../../helpers/apiCall';

export const updateSpinnerStatus = (value) => ({
  type: SPINNER_STATUS,
  spinner: value,
});
const availRequests = () => async (dispatch) => {
  const API_URL = '/trips/requests';
  const HEADERS_REQUEST = {
    token: localStorage.getItem('token'),
  };
  try {
    const availRequestsForApproval = await apiCall.get(API_URL, { headers: HEADERS_REQUEST });
    console.log('availRequestsForApproval', availRequestsForApproval);

    dispatch(updateSpinnerStatus(false));
    toast.success('Request retrieved successfully');
    await dispatch({
      type: AVAIL_REQUESTS_SUCCESS,
      payload: availRequestsForApproval.data,
    });
  } catch (error) {
    dispatch(updateSpinnerStatus(false));
    return dispatch({
      type: AVAIL_REQUESTS_ERROR,
      payload: error.response.data,
    });
  }
};

export const availSingleRequestAction = (id) => async (dispatch) => {
  try {
    const url = `/trips/${id}`;
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

export default availRequests;
