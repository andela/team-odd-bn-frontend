import dotenv from 'dotenv';
import {
  SIGNIN_SUCCESS, SIGNIN_INPUT, SIGNIN_ERROR, UPDATE_SPINNER_STATUS,
} from '../actionTypes/authActionTypes';
import { notificationError, notificationSuccess } from '../../helpers/notificationPopUp';
import apiCall from '../../helpers/apiCall';

dotenv.config();

export const loginError = (message) => ({
  type: SIGNIN_ERROR,
  payload: message,
});

export const spinnerStatusAction = (status) => ({
  type: UPDATE_SPINNER_STATUS,
  payload: status,
});


export const signinAction = (signinData) => async (dispatch) => {
  dispatch(spinnerStatusAction(true));
  try {
    const signinResponse = await apiCall.post('auth/signin', signinData);
    notificationSuccess(signinResponse.data.message);
    dispatch({
      type: SIGNIN_SUCCESS,
      payload: signinResponse.data,
    });
    const { data } = signinResponse.data;
    localStorage.setItem('token', data);
  } catch (err) {
    if (err.response) {
      const { message } = err.response.data;
      notificationError('Email or password is not correct');
      return dispatch(loginError({ message }));
    }
    return dispatch(loginError({ message: 'Server Error' }));
  }
  dispatch(spinnerStatusAction(false));
};


export const updateSigninInputAction = (data) => ({
  type: SIGNIN_INPUT,
  payload: data,
});
