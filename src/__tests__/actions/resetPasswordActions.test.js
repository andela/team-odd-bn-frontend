import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import apiCall from '../../helpers/apiCall';
import {
  resetPasswordAction,
  sendResetRequestAction,
  updateEmailInput,
  updatePasswordInput,
  updateSpinnerStatus,
} from '../../redux/actions/resetPasswordActions';
import {
  successResetRequest,
  successApiResetRequest,
  tokenErrorApiResetRequest,
  tokenErrorResetRequest,
  successApiresetPassword,
  successResetPassword,
  passwordInputActions,
  userNotFoundAction,
  emailInputAction,
  spinnerActions,
  userNotFound,
  newPassword,
  token,
  email,
} from '../../__mocks__/auth/resetPasswordMock';

let store;
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
describe('Password reset Actions', () => {
  beforeEach(() => {
    moxios.install(apiCall);
  });

  afterEach(() => {
    moxios.uninstall(apiCall);
  });

  it('it Should dispatch error when user provides email which is not in DB', async () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(userNotFound);
    });
    store = mockStore({});
    const email = 'test@user.com';
    await store.dispatch(sendResetRequestAction(email))
      .then(async () => {
        const calledActions = store.getActions();
        expect(calledActions).toEqual(userNotFoundAction);
      });
  });
  it('it Should dispatch send password reset email suceesfully', async () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(successApiResetRequest);
    });

    store = mockStore({});
    await store.dispatch(sendResetRequestAction(email))
      .then(async () => {
        const calledActions = store.getActions();
        expect(calledActions).toEqual(successResetRequest);
      });
  });
  it('it Should dispatch error when token is malformed', async () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(tokenErrorApiResetRequest);
    });

    store = mockStore({});

    await store.dispatch(resetPasswordAction({ token, newPassword }))
      .then(async () => {
        const calledActions = store.getActions();
        expect(calledActions).toEqual(tokenErrorResetRequest);
      });
  });
  it('it Should dispatch password reset successfully', async () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(successApiresetPassword);
    });

    store = mockStore({});

    await store.dispatch(resetPasswordAction({ token, newPassword }))
      .then(async () => {
        const calledActions = store.getActions();
        expect(calledActions).toEqual(successResetPassword);
      });
  });
  it('it Should update email input with actions', async () => {
    const calledActions = updateEmailInput(email);
    expect(calledActions).toEqual(emailInputAction);
  });
  it('it Should update password input with actions', async () => {
    const calledActions = updatePasswordInput(newPassword);
    expect(calledActions).toEqual(passwordInputActions);
  });
  it('it Should update spinner status with actions', async () => {
    const calledActions = updateSpinnerStatus(true);
    expect(calledActions).toEqual(spinnerActions);
  });
});
