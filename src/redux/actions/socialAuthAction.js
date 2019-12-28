import * as types from '../actionTypes/socialAuthActionType';

const socialAuthSuccess = (data) => ({
  type: types.SOCIAL_AUTH_SUCCESS,
  payload: data,
});

const socialAuth = (data) => async (dispatch) => {
  const { token } = data;
  window.localStorage.setItem('token', token);
  dispatch(socialAuthSuccess(true));
};

export default socialAuth;
