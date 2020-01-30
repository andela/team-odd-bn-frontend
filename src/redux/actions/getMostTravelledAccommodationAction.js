import { GET_MOST_TRAVELLED_SUCCESS, GET_MOST_TRAVELLED_ERROR } from '../actionTypes/accommodationActionTypes';
import apiCall from '../../helpers/apiCall';

export const getMostTravelled = () => async (dispatch) => {
  const API_URL = '/trips/most-traveled';
  const HEADERS_REQUEST = {
    token: localStorage.getItem('token'),
  };
  try {
    const getMostTravelledData = await apiCall.get(API_URL, { headers: HEADERS_REQUEST });
    dispatch({
      type: GET_MOST_TRAVELLED_SUCCESS,
      payload: getMostTravelledData.data,
    });
  } catch (error) {
    dispatch({
      type: GET_MOST_TRAVELLED_ERROR,
      payload: error.response.data,
    });
  }
};

export default getMostTravelled;
