import { GET_ALL_CITIES_ERROR, GET_ALL_CITIES_SUCCESS } from '../actionTypes/tripsActionTypes';
import apiCall from '../../helpers/apiCall';

const getCities = () => async (dispatch) => {
  const API_URL = '/trips/all-cities';
  const HEADERS_REQUEST = {
    token: localStorage.getItem('token'),
  };

  try {
    const getAllCities = await apiCall.get(API_URL, { headers: HEADERS_REQUEST });
    await dispatch({
      type: GET_ALL_CITIES_SUCCESS,
      payload: getAllCities.data,
    });
  } catch (error) {
    return dispatch({
      type: GET_ALL_CITIES_ERROR,
      payload: error.response.data,
    });
  }
};

export default getCities;
