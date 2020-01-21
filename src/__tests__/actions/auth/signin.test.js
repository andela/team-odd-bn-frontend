import moxios from 'moxios';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import {
  spinnerStatusAction,
  signinAction,
  updateSigninInputAction,
} from '../../../redux/actions/signinActions';
import apiCall from '../../../helpers/apiCall';
import { UPDATE_SPINNER_STATUS, SIGNIN_INPUT } from '../../../redux/actionTypes/authActionTypes';
import {
  successResponse,
  loginSuccessActions,
  errorResponse,
  loginErrorActions,
  loginRequestErrorActions,
  errorRequest,
  useLoginData,
} from '../../../__mocks__/__loginTestMock__/loginMock';

let stores;
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('login page', () => {
  beforeEach(() => {
    moxios.install(apiCall);
  });

  afterEach(() => {
    moxios.uninstall(apiCall);
  });

  it('Should dispatch logged in successfully', async () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(successResponse);
    });
    stores = mockStore({});
    await stores.dispatch(signinAction(useLoginData)).then(async () => {
      const getActions = stores.getActions();
      expect(getActions).toEqual(loginSuccessActions);
    });
  });

  it('Should dispatch error', async () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(errorResponse);
    });
    stores = mockStore({});
    await stores.dispatch(signinAction(useLoginData)).then(async () => {
      const getActions = stores.getActions();
      expect(getActions).toEqual(loginErrorActions);
    });
  });

  it('Should dispatch error from server', async () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.reject(errorRequest);
    });
    stores = mockStore({});
    await stores.dispatch(signinAction(useLoginData)).then(async () => {
      const getActions = stores.getActions();
      expect(getActions).toEqual(loginRequestErrorActions);
    });
  });

  it('Should handle changing spinner status', () => {
    const loginInput = { email: 'sugira@gmail.com' };
    const newState = updateSigninInputAction(loginInput);
    expect(newState).toEqual({
      type: SIGNIN_INPUT,
      payload: loginInput,
    });
  });
  it('Should handle changing spinner status', () => {
    const newState = spinnerStatusAction(true);
    expect(newState).toEqual({
      type: UPDATE_SPINNER_STATUS,
      payload: true,
    });
  });
});
