/* eslint-disable import/prefer-default-export */
import {
  OPEN_ROOMS_MODAL,
  NEW_ADDED_ROOMS,
  NEW_ADDED_PHOTOS,
  NEW_ACCOMMODATION_INPUT,
  GET_CITIES_SUCCESS,
  CREATE_ACCOMMODATION_SUCCESS,
  CREATE_ACCOMMODATION_ERROR,
  SPINNER_STATUS,
} from '../actionTypes/accommodationActionTypes';
import {
  notificationError,
  notificationSuccess,
} from '../../helpers/notificationPopUp';
import apiCall from '../../helpers/apiCall';


const emptyError = {
  type: CREATE_ACCOMMODATION_ERROR,
  status: 'success',
  error: {},
};
const triggerError = (error) => ({
  type: CREATE_ACCOMMODATION_ERROR,
  status: 'error',
  error: error.response.data,
});
const stopSpinner = {
  type: SPINNER_STATUS,
  spinner: false,
};

export const getCitiesAction = () => async (dispatch) => {
  const HEADERS_REQUEST = {
    token: localStorage.getItem('token'),
  };
  const cities = await apiCall.get('/location', {
    headers: HEADERS_REQUEST,
  });

  dispatch(stopSpinner);
  dispatch({
    type: GET_CITIES_SUCCESS,
    retrievedCities: cities.data,
  });
  dispatch(emptyError);
};
export const createAccommodationAction = (payload) => async (dispatch) => {
  const HEADERS_REQUEST = {
    token: localStorage.getItem('token'),
  };
  try {
    const createAccommodation = await apiCall.post('/accommodations', payload, {
      headers: HEADERS_REQUEST,
    });

    dispatch(stopSpinner);
    dispatch({
      type: CREATE_ACCOMMODATION_SUCCESS,
      payload: createAccommodation.data,
    });
    dispatch(emptyError);
    notificationSuccess(createAccommodation.data.message);
  } catch (error) {
    dispatch({
      type: SPINNER_STATUS,
      spinner: false,
    });
    dispatch(triggerError(error));
    const err = error.response.data.message;
    return (Object.prototype.toString.call(err) === '[object Array]') ? notificationError(err[0]) : notificationError(err);
  }
};
export const roomsModalAction = (openRoomsModal) => ({
  type: OPEN_ROOMS_MODAL,
  openRoomsModal,
});
export const addNewRoomsAction = (data) => ({
  type: NEW_ADDED_ROOMS,
  rooms: data,
});

export const newAccommodationInput = (input) => ({
  type: NEW_ACCOMMODATION_INPUT,
  payload: input,
});

export const newAccommodationPhotos = (photo) => ({
  type: NEW_ADDED_PHOTOS,
  photos: photo,
});
export const updateSpinnerStatus = (value) => ({
  type: SPINNER_STATUS,
  spinner: value,
});
