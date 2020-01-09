import verifyEmailReducer from '../../redux/reducers/authReducers/verifyEmailReducer';
import {
  verifyEmailResponse,
  resendEmailResponse,
  spinnerAction,
  emailInputAction,
  verifyEmailError,
} from '../../__mocks__/auth/verifyEmailMock';

describe('Resend verification email Reducer', () => {
  it('Should act on RESEND_VERIFICATION_EMAIL', () => {
    const triggerState = verifyEmailReducer({}, emailInputAction);
    expect(triggerState).toEqual({
      payload: emailInputAction.payload,
    });
  });
  it('Should act on RESEND_EMAIL_SUCCESS', () => {
    const triggerState = verifyEmailReducer({}, resendEmailResponse);
    expect(triggerState).toEqual({
      payload: resendEmailResponse.payload,
    });
  });
  it('Should act on IS_EMAIL_VERIFIED', () => {
    const triggerState = verifyEmailReducer({}, verifyEmailResponse);
    expect(triggerState).toEqual({
      isEmailVerified: verifyEmailResponse.isEmailVerified,
    });
  });
  it('Should act on ERROR', () => {
    const triggerState = verifyEmailReducer({}, verifyEmailError);
    expect(triggerState).toEqual({
      status: verifyEmailError.status,
      error: verifyEmailError.error,
    });
  });
  it('Should act on SPINNER_STATUS', () => {
    const triggerState = verifyEmailReducer({}, spinnerAction);
    expect(triggerState).toEqual({
      spinner: spinnerAction.spinner,
    });
  });
});
