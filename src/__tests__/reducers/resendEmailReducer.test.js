import resendEmailReducer from '../../redux/reducers/authReducers/resendEmailReducer';
import {
  resendEmailResponse,
  spinnerAction,
  emailInputAction,
  resendEmailError,
} from '../../__mocks__/auth/resendEmailMock';

describe('Resend verification email Reducer', () => {
  it('Should act on RESEND_VERIFICATION_EMAIL', () => {
    const triggerState = resendEmailReducer({}, emailInputAction);
    expect(triggerState).toEqual({
      payload: emailInputAction.payload,
    });
  });
  it('Should act on RESEND_EMAIL_SUCCESS', () => {
    const triggerState = resendEmailReducer({}, resendEmailResponse);
    expect(triggerState).toEqual({
      payload: resendEmailResponse.payload,
    });
  });
  it('Should act on ERROR', () => {
    const triggerState = resendEmailReducer({}, resendEmailError);
    expect(triggerState).toEqual({
      status: resendEmailError.status,
      error: resendEmailError.error,
    });
  });
  it('Should act on SPINNER_STATUS', () => {
    const triggerState = resendEmailReducer({}, spinnerAction);
    expect(triggerState).toEqual({
      spinner: spinnerAction.spinner,
    });
  });
});
