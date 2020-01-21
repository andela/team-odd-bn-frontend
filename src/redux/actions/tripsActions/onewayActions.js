import dotenv from 'dotenv';
import {
  ONEWAY_SUCCESS,
  GET_CITY_SUCCESS,
  ONEWAY_INPUT,
  ONEWAY_ERROR,
  UPDATE_SPINNER_STATUS,
  GET_CITY_ERROR,
} from '../../actionTypes/tripsActionType';
import {
  notificationError,
  notificationSuccess,
} from '../../../helpers/notificationPopUp';

import apiCall from '../../../helpers/apiCall';

dotenv.config();

export const onewayError = (message) => ({
  type: ONEWAY_ERROR,
  payload: message,
});
export const getOnewayError = (message) => ({
  type: GET_CITY_ERROR,
  payload: message,
});

export const updateSpinnerStatus = (value) => ({
  type: UPDATE_SPINNER_STATUS,
  spinner: value,
});

const stopSpinner = {
  type: UPDATE_SPINNER_STATUS,
  spinner: false,
};


export const getTripAction = () => async (dispatch) => {
  try {
    const options = {
      headers: {
        token: localStorage.getItem('token'),
      },
    };
    const getCitiesResponse = await apiCall.get('/location', options);

    dispatch(stopSpinner);
    dispatch({
      type: GET_CITY_SUCCESS,
      payload: getCitiesResponse.data,
    });
  } catch (err) {
    notificationError(getOnewayError('Server Error'));
  }
};

export const onewayAction = (payload) => async (dispatch) => {
  try {
    const options = {
      headers: {
        token: localStorage.getItem('token'),
      },
      content_type: 'application/json',
    };
    payload.originId = parseInt(payload.originId, 10);
    payload.destinationId = parseInt(payload.destinationId, 10);
    payload.startDate = payload.startDate.split('/').reverse().join('-');

    const onewayResponse = await apiCall.post('/trips/oneway', payload, options);
    dispatch(stopSpinner);
    dispatch({
      type: ONEWAY_SUCCESS,
      payload: onewayResponse.data,
    });
    const { message } = await onewayResponse.data;
    await notificationSuccess(message);
  } catch (error) {
    dispatch(stopSpinner);
    const { data } = await error.response;
    await notificationError(`${data.message}`);
    return dispatch(onewayError(`${data.message}`));
  }
};


export const storeInputsAction = (data) => ({
  type: ONEWAY_INPUT,
  payload: data,
});
