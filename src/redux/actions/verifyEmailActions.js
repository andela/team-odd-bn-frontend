/* eslint-disable import/prefer-default-export */
import {
  RESEND_VERIFICATION_EMAIL,
  RESEND_EMAIL_SUCCESS,
  ERROR, SPINNER_STATUS,
  IS_EMAIL_VERIFIED,
} from '../actionTypes/authActionTypes';
import verifyToken from '../../helpers/verifyToken';
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

export const resendVerificationEmailAction = (email) => async (dispatch) => {
  try {
    const sendVerification = await apiCall.post('auth/resend-email', { email });
    dispatch(stopSpinner);
    dispatch({
      type: RESEND_EMAIL_SUCCESS,
      payload: sendVerification.data,
    });
    dispatch(emptyError);
    notificationSuccess(sendVerification.data.message);
  } catch (error) {
    notificationError(error);

    dispatch(stopSpinner);
    dispatch(triggerError(error));
    notificationError(error.response.data.message);
  }
};
export const verifyEmailAction = (token) => async (dispatch) => {
  const decoded = verifyToken(token);
  try {
    const verifyEmail = await apiCall.get(`auth/verify-email/${decoded.id}/${token}`);
    dispatch({
      type: IS_EMAIL_VERIFIED,
      isEmailVerified: true,
    });
    notificationSuccess(verifyEmail.data.message);
  } catch (error) {
    dispatch(triggerError(error));
    notificationError(error.response.message.message);
  }
};
export const updateEmailInput = (email) => ({
  type: RESEND_VERIFICATION_EMAIL,
  payload: email,
});
export const updateSpinnerStatus = (value) => ({
  type: SPINNER_STATUS,
  spinner: value,
});
