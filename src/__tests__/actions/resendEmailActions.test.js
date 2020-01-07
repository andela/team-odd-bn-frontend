import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import apiCall from '../../helpers/apiCall';
import {
  resendVerificationEmailAction,
  updateEmailInput,
  updateSpinnerStatus,
} from '../../redux/actions/resendEmailActions';
import {
  successResendEmail,
  successApiResendEmail,
  userNotFoundAction,
  emailInputAction,
  spinnerActions,
  userNotFound,
  email,
} from '../../__mocks__/auth/resendEmailMock';

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
  it('it Should dispatch send resend  email suceesfully', async () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(successApiResendEmail);
    });

    store = mockStore({});
    await store
      .dispatch(resendVerificationEmailAction(email))
      .then(async () => {
        const calledActions = store.getActions();
        expect(calledActions).toEqual(successResendEmail);
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
