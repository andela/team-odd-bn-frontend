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
    dispatch(updateSpinnerStatus(false));
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

export default availRequests;
