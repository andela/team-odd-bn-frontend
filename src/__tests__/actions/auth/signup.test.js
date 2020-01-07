import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  signupAction,
  updateSignupInputAction,
  spinnerStatusAction,
} from '../../../redux/actions/authActions';
import {
  SIGNUP_INPUT,
  UPDATE_SPINNER_STATUS,
} from '../../../redux/actionTypes/authActionTypes';
import apiCall from '../../../helpers/apiCall';
import {
  expectedSignupErrorTypeActions,
  errorTypeResponse,
  errorResponse,
  successResponse,
  expectedSignupErrorActions,
  expectedSignupSuccessActions,
  expectedSignupFailureAction,
  signupPasswordMismatch,
  errorRequest,
  expectedSignuperrorRequestActions,
  signupMatchingPasswords,
  signupUnMatchingPasswords,
} from '../../../__mocks__/auth/authMock';

let store;
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Signup Tests ', () => {
  beforeEach(() => {
    moxios.install(apiCall);
  });

  afterEach(() => {
    moxios.uninstall(apiCall);
  });

  it('it Should dispatch signup success', async () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(errorResponse);
    });

    store = mockStore({});
    const { dispatch } = store;
    await dispatch(signupAction({})).then(async () => {
      const calledActions = store.getActions();
      expect(calledActions).toEqual(expectedSignupErrorActions);
    });
  });
  it('it Should dispatch signup success', async () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(errorTypeResponse);
    });
    store = mockStore({});
    const { dispatch } = store;
    await dispatch(signupAction({})).then(async () => {
      const calledActions = store.getActions();
      expect(calledActions).toEqual(expectedSignupErrorTypeActions);
    });
  });

  it('it Should dispatch signup success', async () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.reject(errorRequest);
    });
    store = mockStore({});
    const { dispatch } = store;
    await dispatch(signupAction({})).then(async () => {
      const calledActions = store.getActions();
      expect(calledActions).toEqual(expectedSignuperrorRequestActions);
    });
  });

  it('it Should dispatch error wrong input is provided', async () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(successResponse);
    });
    store = mockStore({});
    await store
      .dispatch(
        signupAction(signupMatchingPasswords),
      )
      .then(async () => {
        const calledActions = store.getActions();
        expect(calledActions).toEqual(expectedSignupFailureAction);
      });
  });
  it('it Should dispatch error wrong input is provided', async () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(successResponse);
    });
    store = mockStore({});
    await store.dispatch(
      signupAction(signupUnMatchingPasswords),
    );
    const calledActions = store.getActions();
    expect(calledActions).toEqual(signupPasswordMismatch);
  });

  it('Should handle changing spinner status', () => {
    const signupInput = { firstName: 'hezron' };
    const newState = updateSignupInputAction(signupInput);
    expect(newState).toEqual({
      type: SIGNUP_INPUT,
      payload: signupInput,
    });
  });
  it('Should handle changing spinner status', () => {
    const newState = spinnerStatusAction(false);
    expect(newState).toEqual({
      type: UPDATE_SPINNER_STATUS,
      payload: false,
    });
  });
});
