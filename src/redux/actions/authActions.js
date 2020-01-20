import {
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  SIGNUP_INPUT,
  UPDATE_SPINNER_STATUS,
} from '../actionTypes/authActionTypes';
import apiCall from '../../helpers/apiCall';
import {
  notificationError,
  notificationSuccess,
} from '../../helpers/notificationPopUp';
import errorProcessor from '../../helpers/errorProcessor';

export const updateSignupInputAction = (data) => ({
  type: SIGNUP_INPUT,
  payload: data,
});
export const spinnerStatusAction = (status) => ({
  type: UPDATE_SPINNER_STATUS,
  payload: status,
});

export const signupAction = (signupData) => (signupData.password !== signupData.confirmPassword
  ? async (dispatch) => {
    notificationError('The password and confirm password should match');
    dispatch({
      type: SIGNUP_ERROR,
      payload: {
        message: 'The password and confirm password should match',
      },
    });
  }
  : async (dispatch) => {
    dispatch(spinnerStatusAction(true));
    try {
      const signupResponse = await apiCall.post('/auth/signup', signupData);
      notificationSuccess(signupResponse.data.message);
      localStorage.setItem('token', signupResponse.data.data);
      dispatch(spinnerStatusAction(false));
      dispatch({
        type: SIGNUP_SUCCESS,
        payload: signupResponse.data,
      });
    } catch (error) {
      const err = errorProcessor(error);
      err.map((e) => notificationError(e));
      dispatch(spinnerStatusAction(false));
      dispatch({
        type: SIGNUP_ERROR,
        payload: error.response.data,
      });
    }
  });
