import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import availRequestsActions from '../../redux/actions/tripsActions/availRequestsActions';
import {SPINNER_STATUS,
  AVAIL_REQUESTS_SUCCESS, AVAIL_REQUESTS_ERROR, APPROVE_REQUEST_ERROR, APPROVE_REQUEST_SUCCESS
} from '../../redux/actionTypes/tripsActionTypes';
import apiCall from '../../helpers/apiCall';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
let store;
jest.fn();
describe('Avail Request for Approval Actions Test Suite', () => {
  beforeEach(() => {
    moxios.install(apiCall);
  });

  afterEach(() => {
    moxios.uninstall(apiCall);
  });

  it('Should dispatch AVAIL_REQUESTS_SUCCESS', async () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          message: 'Success',
        },
      });
    });
    const expectedActions = [
      {
        spinner: false,
        type: SPINNER_STATUS,
      },
      {
        payload: {
          message: 'Success',
        },
        type: AVAIL_REQUESTS_SUCCESS,
      }];
    store = mockStore({});
    await store.dispatch(availRequestsActions())
      .then(async () => {
        const calledActions = store.getActions();
        expect(calledActions).toEqual(expectedActions);
      });
  });

  it('Should dispatch AVAIL_REQUESTS_ERROR', async () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 404,
        response: {
          message: 'Error',
        },
      });
    });
    const expectedActions = [
      {
        spinner: false,
        type: SPINNER_STATUS,
      },
      {
        payload: {
          message: 'Error',
        },
        type: AVAIL_REQUESTS_ERROR,
      }];
    store = mockStore({});
    await store.dispatch(availRequestsActions ())
      .then(async () => {
        const calledActions = store.getActions();
        expect(calledActions).toEqual(expectedActions);
      });
  });
});
