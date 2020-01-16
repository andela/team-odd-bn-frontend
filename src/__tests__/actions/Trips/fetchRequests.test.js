
import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  fetchRequestsAction, fetchSingleRequestsAction,
  fetchRequestCommentsAction,
} from '../../../redux/actions/tripsActions/fetchRequests';
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
      request.respondWith({
        status: 200,
        response: {
          message: 'Fetch success',
        },
      });
    });

    store = mockStore({});
    const { dispatch } = store;
    await dispatch(fetchRequestsAction()).then(async () => {
      const calledActions = store.getActions();
      expect(calledActions).toEqual([
        {
          type: 'FETCH_REQUESTS_SUCCESS',
          payload: {
            message: 'Fetch success',
          },
        },
      ]);
    });
  });
  it('it Should dispatch signup success', async () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          message: 'Fetch success',
        },
      });
    });

    store = mockStore({});
    const { dispatch } = store;
    await dispatch(fetchSingleRequestsAction()).then(async () => {
      const calledActions = store.getActions();
      expect(calledActions).toEqual([
        {
          type: 'FETCH_SINGLE_REQUEST_SUCCESS',
          payload: {
            message: 'Fetch success',
          },
        },
      ]);
    });
  });
  it('it Should dispatch signup success', async () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          message: 'Fetch success',
        },
      });
    });

    store = mockStore({});
    const { dispatch } = store;
    await dispatch(fetchRequestCommentsAction(6)).then(async () => {
      const calledActions = store.getActions();
      expect(calledActions).toEqual([
        {
          type: 'FETCH_COMMENTS_SUCCESS',
          payload: {
            message: 'Fetch success',
          },
        },
      ]);
    });
  });

  it('it Should dispatch signup success', async () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(errorResponse);
    });

    store = mockStore({});
    const { dispatch } = store;
    await dispatch(fetchRequestCommentsAction(8)).then(async () => {
      const calledActions = store.getActions();
      expect(calledActions).toEqual([
        {
          type: 'FETCH_REQUESTS_ERROR',
          payload: {
            message: [
              'first name should be valid',
              'last name should be valid',
              'email should be valid',
              'A valid password should have a character, number, …d a lower case letter and should be longer than 8',
            ],
          },
        },
      ]);
    });
  });

  it('it Should dispatch signup success', async () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(errorTypeResponse);
    });

    store = mockStore({});
    const { dispatch } = store;
    await dispatch(fetchSingleRequestsAction(8)).then(async () => {
      const calledActions = store.getActions();

      expect(calledActions).toEqual([
        {
          type: 'FETCH_REQUESTS_ERROR',
          payload: {
            error: 'first name should be valid',
          },
        },
      ]);
    });
  });
  it('it Should dispatch signup success', async () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.reject(errorRequest);
    });

    store = mockStore({});
    const { dispatch } = store;
    await dispatch(fetchRequestsAction()).then(async () => {
      const calledActions = store.getActions();

      expect(calledActions).toEqual([
        {
          type: 'FETCH_REQUESTS_ERROR',
          payload: {
            message: 'Ooops! Network Error',
          },
        },
      ]);
    });
  });
});
