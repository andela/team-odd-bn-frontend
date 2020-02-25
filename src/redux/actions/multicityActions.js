import axios from 'axios';
import dotenv from 'dotenv';
import * as types from '../actionTypes/multicityActionType';
import apiCall from '../../helpers/apiCall';
import updateSpinnerStatus from './profileActions';
import {notificationSuccess, notificationError } from '../../helpers/notificationPopUp';

dotenv.config();

const addEmptyData = {
  originId: '',
  destinationId: '',
  startDate: '',
  returnDate: '',
  reason: '',
};

export const editInputForm = (actioName, data) => ({
  type: actioName,
  payload: data,
});


export const addMoreTrip = () => async (dispatch) => {
  dispatch(editInputForm(types.ADD_TRIP_REQUEST_MULTIPLE_DATA_SUCCESS, addEmptyData));
};

export const removeMoreTrip = (data) => async (dispatch) => {
  dispatch(editInputForm(types.REMOVE_TRIP_REQUEST_MULTIPLE_DATA_SUCCESS, data));
};

export const editMultipleTrip = (data) => async (dispatch) => {
  dispatch(editInputForm(types.EDIT_TRIP_REQUEST_MULTIPLE_DATA_SUCCESS, data));
};


export const sendMulticityTrip = (data) => async (dispatch) => {

  const Option = {
    headers: {
      token: localStorage.getItem('token'),
    },
  };

  const multipleDataCombined = {
    itinerary: data.data,
  };

  try {
    const createNewTrip = await apiCall.post('/trips/multicity', multipleDataCombined, Option);
    dispatch(updateSpinnerStatus(false));
    dispatch(editInputForm(types.SEND_MULTIPLE_DATA_SUCCESS, { data: createNewTrip }));
    notificationSuccess(createNewTrip.data.message);
  } catch (error) {
    dispatch(updateSpinnerStatus(false));
    if (error.response) {
      notificationError(error.response.data.message);
      const { message } = error.response.data;
      return dispatch(editInputForm(types.SEND_MULTIPLE_DATA_ERROR, { message }));
    }
    if (error.request) {
      notificationError(error.request);
      return dispatch(editInputForm(types.SEND_MULTIPLE_DATA_ERROR, { message: ['Network Error'] }));
    }
    return dispatch(editInputForm(types.SEND_MULTIPLE_DATA_ERROR, { message: ['Server Error'] }));
  }
};
