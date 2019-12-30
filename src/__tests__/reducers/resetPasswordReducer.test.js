import resetPasswordReducers from '../../redux/reducers/authReducers/resetPasswordReducer';
import {
  resetRequestResponse,
  resetPaswordResponse,
  passwordInputActions,
  passwordResetError,
  spinnerAction,
  emailInputAction,
} from '../../__mocks__/auth/resetPasswordMock';

describe('Reset Password Reducer', () => {
  it('Should act on PASSWORD_RESET_EMAIL', () => {
    const triggerState = resetPasswordReducers({}, emailInputAction);
    expect(triggerState).toEqual({
      payload: emailInputAction.payload,
    });
  });
  it('Should act on RESET_PASSWORD_INPUT', () => {
    const triggerState = resetPasswordReducers({}, passwordInputActions);
    expect(triggerState).toEqual({
      payload: passwordInputActions.payload,
    });
  });
  it('Should act on RESET_REQUEST_SUCCESS', () => {
    const triggerState = resetPasswordReducers({}, resetRequestResponse);
    expect(triggerState).toEqual({
      payload: resetRequestResponse.payload,
    });
  });
  it('Should act on RESET_PASSWORD_SUCCESS', () => {
    const triggerState = resetPasswordReducers({}, resetPaswordResponse);
    expect(triggerState).toEqual({
      payload: resetPaswordResponse.payload,
    });
  });
  it('Should act on ERROR', () => {
    const triggerState = resetPasswordReducers({}, passwordResetError);
    expect(triggerState).toEqual({
      status: passwordResetError.status,
      error: passwordResetError.error,
    });
  });
  it('Should act on ERROR', () => {
    const triggerState = resetPasswordReducers({}, spinnerAction);
    expect(triggerState).toEqual({
      spinner: spinnerAction.spinner,
    });
  });
});
