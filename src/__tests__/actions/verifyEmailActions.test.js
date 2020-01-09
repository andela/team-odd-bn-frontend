import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import apiCall from '../../helpers/apiCall';
import {
  resendVerificationEmailAction,
  verifyEmailAction,
  updateEmailInput,
  updateSpinnerStatus,
} from '../../redux/actions/verifyEmailActions';
import {
  successverifyEmail,
  successApiverifyEmail,
  userNotFoundAction,
  successApiVerifyEmail,
  successVerifiedEmail,
  errorApiVerifyEmail,
  ErrorVerifiedEmail,
  emailInputAction,
  spinnerActions,
  userNotFound,
  email,
} from '../../__mocks__/auth/verifyEmailMock';

let store;
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
describe('Resend verification email Actions', () => {
  beforeEach(() => {
    moxios.install(apiCall);
  });

  afterEach(() => {
    moxios.uninstall(apiCall);
  });
  it('it Should dispatch verified email', async () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(successApiVerifyEmail);
    });

    store = mockStore({});
    const token = 'ldsds';
    await store
      .dispatch(verifyEmailAction(token))
      .then(async () => {
        const calledActions = store.getActions();
        expect(calledActions).toEqual(successVerifiedEmail);
      });
  });
  it('it Should dispatch error on verified email', async () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.reject(errorApiVerifyEmail);
    });

    store = mockStore({});
    await store
      .dispatch(verifyEmailAction())
      .then(async () => {
        const calledActions = store.getActions();
        expect(calledActions).toEqual(ErrorVerifiedEmail);
      });
  });
  it('it Should dispatch error when user provides email which is not in DB', async () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(userNotFound);
    });
    store = mockStore({});
    await store
      .dispatch(resendVerificationEmailAction(email))
      .then(async () => {
        const calledActions = store.getActions();
        expect(calledActions).toEqual(userNotFoundAction);
      });
  });
  it('it Should dispatch resend  email successfully', async () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(successApiverifyEmail);
    });

    store = mockStore({});
    await store
      .dispatch(resendVerificationEmailAction(email))
      .then(async () => {
        const calledActions = store.getActions();
        expect(calledActions).toEqual(successverifyEmail);
      });
  });

  it('it Should update email input with actions', async () => {
    const calledActions = updateEmailInput(email);
    expect(calledActions).toEqual(emailInputAction);
  });
  it('it Should update spinner status with actions', async () => {
    const calledActions = updateSpinnerStatus(true);
    expect(calledActions).toEqual(spinnerActions);
  });
});
