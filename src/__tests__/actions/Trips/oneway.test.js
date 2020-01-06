import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  onewayAction, getTripAction,
} from '../../../redux/actions/tripsActions/onewayActions';
import apiCall from '../../../helpers/apiCall';

import {
  getCities,
} from '../../../__mocks__/__tripsMock__/oneway';


let store;
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Oneway Tests ', () => {
  beforeEach(() => {
    moxios.install(apiCall);
  });

  afterEach(() => {
    moxios.uninstall(apiCall);
  });

  it('it Should dispatch error on oneway trip request ', async () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(
        {
          status: 400,
          response: {
            message: 'Orign should not be same as destination',
          },
        },
      );
    });

    store = mockStore({});
    const { dispatch } = store;
    await dispatch(onewayAction({
      originId: 2,
      destinationId: 6,
      reason: 'fdsfg',
      startDate: '2020-01-17',
    })).then(async () => {
      const calledActions = store.getActions();
      expect(calledActions).toEqual(
        [
          {
            spinner: false,
            type: 'UPDATE_SPINNER_STATUS',
          },
          {
            payload: 'Orign should not be same as destination',
            type: 'ONEWAY_ERROR',
          },
        ],
      );
    });
  });

  it('it Should dispatch error on get cities ', async () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(
        {
          status: 400,
          response: {
            message: 'Server Error',
          },
        },
      );
    });

    store = mockStore({});
    const { dispatch } = store;
    await dispatch(getTripAction({})).then(async () => {
      const calledActions = store.getActions();
      expect(calledActions).toEqual(
        [],
      );
    });
  });

  it('it Should dispatch oneway trip request on success', async () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(
        {
          status: 200,
          response: {
            message: 'Successfully',
          },
        },
      );
    });

    store = mockStore({});
    const { dispatch } = store;
    await dispatch(onewayAction({
      originId: 2,
      destinationId: 6,
      reason: 'fdsfg',
      startDate: '2020-01-17',
    })).then(async () => {
      const calledActions = store.getActions();
      expect(calledActions).toEqual(
        [
          {
            spinner: false,
            type: 'UPDATE_SPINNER_STATUS',
          },
          {
            payload: {
              message: 'Successfully',
            },
            type: 'ONEWAY_SUCCESS',
          },
        ],
      );
    });
  });

  it('it Should dispatch get all cities', async () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(getCities);
    });
    store = mockStore({});
    await store.dispatch(getTripAction()).then(async () => {
      const calledActions = store.getActions();
      expect(calledActions).toEqual(
        [
          {
            spinner: false,
            type: 'UPDATE_SPINNER_STATUS',
          },
          {
            payload: {
              data: [
                {
                  city: 'Kigali',
                  createdAt: '2019-12-09T07:36:36.417Z',
                  id: 1,
                  updatedAt: '2019-12-09T07:36:36.417Z',
                },
              ],
              message: 'Location retrieved',
            },
            type: 'GET_CITY_SUCCESS',
          },
        ],
      );
    });
  });
});
