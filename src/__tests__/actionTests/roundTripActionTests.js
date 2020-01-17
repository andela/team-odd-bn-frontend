
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import createRoundTrip from '../../redux/actions/roundTripActions';
import { SPINNER_STATUS, CREATE_ROUND_TRIP_ERROR, CREATE_ROUND_TRIP_SUCCESS } from '../../redux/actionTypes/tripsActionTypes';
import apiCall from '../../helpers/apiCall';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
let store;
jest.fn();
describe('Round Trip Actions Test Suite', () => {
  beforeEach(() => {
    moxios.install(apiCall);
  });

  afterEach(() => {
    moxios.uninstall(apiCall);
  });

  it('Should dispatch CREATE_ROUND_TRIP_SUCCESS', async () => {
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
      }, {
        payload: 'Success',
        type: CREATE_ROUND_TRIP_SUCCESS,
      }];
    store = mockStore({});
    await store.dispatch(createRoundTrip())
      .then(async () => {
        const calledActions = store.getActions();
        expect(calledActions).toEqual(expectedActions);
      });
  });

  it('Should dispatch CREATE_ROUND_TRIP_ERROR', async () => {
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
      }, {

        payload: {
          message: 'Error',
        },
        type: CREATE_ROUND_TRIP_ERROR,
      }];
    store = mockStore({});
    await store.dispatch(createRoundTrip())
      .then(async () => {
        const calledActions = store.getActions();
        expect(calledActions).toEqual(expectedActions);
      });
  });

  it('Should dispatch CREATE_ROUND_TRIP_ERROR', async () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 404,
        response: {
          message: ['Error'],
        },
      });
    });
    const expectedActions = [
      {
        spinner: false,
        type: SPINNER_STATUS,
      }, {

        payload: {
          message: ['Error'],
        },
        type: CREATE_ROUND_TRIP_ERROR,
      }];
    store = mockStore({});
    await store.dispatch(createRoundTrip())
      .then(async () => {
        const calledActions = store.getActions();
        expect(calledActions).toEqual(expectedActions);
      });
  });
});
