
import dotenv from 'dotenv';
import {
  GET_STATS_TRIP_SUCCESS,
  GET_STATS_INPUT,
  GET_STATS_TRIP_ERROR,
  UPDATE_SPINNER_STATUS,
  TRIP_COUNTER_INPUT,
} from '../../actionTypes/getStatsActionTypes';
import {
  notificationError,
  notificationSuccess,
} from '../../../helpers/notificationPopUp';

import apiCall from '../../../helpers/apiCall';

dotenv.config();

export const getStatsError = (message) => ({
  type: GET_STATS_TRIP_ERROR,
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


export const getStatsAction = (payload) => async (dispatch) => {
  try {
    const options = {
      headers: {
        token: localStorage.getItem('token'),
      },
      content_type: 'application/json',
    };

    const getStatsResponse = await apiCall.get(`/trips/stats/${payload.tripType}/?from=${payload.from}&&to=${payload.to}`, options);
    const onewayTripStats = await apiCall.get(`/trips/stats/1/?from=${payload.from}&&to=${payload.to}`, options);
    const roundTripStats = await apiCall.get(`/trips/stats/2/?from=${payload.from}&&to=${payload.to}`, options);
    const multiTripStats = await apiCall.get(`/trips/stats/3/?from=${payload.from}&&to=${payload.to}`, options);

    const tripRequestCollection = multiTripStats.data.data.userTrips.map((item) => item.tripRequestId);
    let newDataSet = new Set(tripRequestCollection);
    newDataSet = Array.from(newDataSet);
    multiTripStats.data.data.tripsCounter = newDataSet.length;

    dispatch({
      type: TRIP_COUNTER_INPUT,
      payload: {
        onewayTripStats: onewayTripStats.data.data,
        roundTripStats: roundTripStats.data.data,
        multiTripStats: multiTripStats.data.data,
      },

    });
    dispatch({
      type: GET_STATS_TRIP_SUCCESS,
      payload: getStatsResponse.data,
    });
  } catch (error) {
    dispatch(stopSpinner);
    const { data } = error.response;
    await notificationError(`${data.message}`);
    return dispatch(getStatsError(`${data.message}`));
  }
};


export const handleInputsAction = (data) => ({
  type: GET_STATS_INPUT,
  payload: data,
});

export const updateTripCounter = (data) => ({
  type: TRIP_COUNTER_INPUT,
  payload: data,
});
