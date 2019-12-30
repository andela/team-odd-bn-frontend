/* eslint-disable import/prefer-default-export */
import {
  PASSWORD_RESET_EMAIL,
  RESET_PASSWORD_INPUT,
  RESET_REQUEST_SUCCESS,
  RESET_PASSWORD_SUCCESS,
  ERROR, SPINNER_STATUS,
} from '../actionTypes/authActionTypes';
import { notificationError, notificationSuccess } from '../../helpers/notificationPopUp';
import apiCall from '../../helpers/apiCall';


const emptyError = {
  type: ERROR,
  status: 'success',
  error: {},
};
const triggerError = (error) => ({
  type: ERROR,
  status: 'error',
  error: error.response.data,
});
const stopSpinner = {
  type: SPINNER_STATUS,
  spinner: false,
};

export const sendResetRequestAction = (email) => async (dispatch) => {
  try {
    const sendRequest = await apiCall.post('auth/forgot-password', { email });
    dispatch(stopSpinner);
    dispatch(
      {
        type: RESET_REQUEST_SUCCESS,
        payload: sendRequest.data,
      },
    );
    dispatch(emptyError);
    notificationSuccess(sendRequest.data.message);
  } catch (error) {
    notificationError(error);

    dispatch(stopSpinner);
    dispatch(triggerError(error));
    notificationError(error.response.data.message);
  }
};
export const resetPasswordAction = ({ token, newPassword }) => async (dispatch) => {
  try {
    const resetPassword = await apiCall.patch(`auth/reset-password/${token}`, newPassword);


    dispatch(stopSpinner);
    dispatch(
      {
        type: RESET_PASSWORD_SUCCESS,
        payload: resetPassword.data,
      },
    );
    dispatch(emptyError);
    notificationSuccess(resetPassword.data.message);
  } catch (error) {
    dispatch(
      {
        type: SPINNER_STATUS,
        spinner: false,
      },
    );
    dispatch(triggerError(error));
    notificationError(error.response.data.message);
  }
};
export const updateEmailInput = (email) => ({
  type: PASSWORD_RESET_EMAIL,
  payload: email,
});
export const updatePasswordInput = (input) => ({
  type: RESET_PASSWORD_INPUT,
  payload: input,
});
export const updateSpinnerStatus = (value) => ({
  type: SPINNER_STATUS,
  spinner: value,
});
