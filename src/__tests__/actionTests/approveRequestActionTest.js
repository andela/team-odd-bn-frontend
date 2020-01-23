import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import approveRequestAction from '../../redux/actions/tripsActions/approveRequestAction';
import { SPINNER_STATUS, APPROVE_REQUEST_ERROR, APPROVE_REQUEST_SUCCESS } from '../../redux/actionTypes/tripsActionTypes';
import apiCall from '../../helpers/apiCall';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
let store;
jest.fn();
describe('Approve Request Test Suite', () => {
  beforeEach(() => {
    moxios.install(apiCall);
  });

  afterEach(() => {
    moxios.uninstall(apiCall);
  });

  it('Should dispatch APPROVE_REQUEST_SUCCESS', async () => {
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
        payload: 'Success',
        type: APPROVE_REQUEST_SUCCESS,
      }];
    store = mockStore({});
    await store.dispatch(approveRequestAction())
      .then(async () => {
        const calledActions = store.getActions();
        expect(calledActions).toEqual(expectedActions);
      });
  });

  it('Should dispatch APPROVE_REQUEST_ERROR', async () => {
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
        type: APPROVE_REQUEST_ERROR,
      }];
    store = mockStore({});
    await store.dispatch(approveRequestAction())
      .then(async () => {
        const calledActions = store.getActions();
        expect(calledActions).toEqual(expectedActions);
      });
  });
});
