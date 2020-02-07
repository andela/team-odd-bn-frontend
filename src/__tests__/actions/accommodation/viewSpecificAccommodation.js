import moxios from 'moxios';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import apiCall from '../../../helpers/apiCall';
import singleAccommodation, { returnData } from '../../../redux/actions/singleAccommodation';

import { viewSpecificAccommodationViewsMocks } from '../../../__mocks__/RatingMocks/BookingAccommodation';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Expect to customize response', () => {
  it('Should return response with action and type', () => {
    const result = returnData('FEKE_ACTION', 'FEKE_DATA');
    expect(result).toEqual({ type: 'FEKE_ACTION', payload: 'FEKE_DATA' });
  });
});

describe('Expect to mock request', () => {
  beforeEach(() => {
    moxios.install(apiCall);
  });

  afterEach(() => {
    moxios.uninstall(apiCall);
  });

  it('Should mock return specific accomodations info', async () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 201,
        response: {
          message: 'Created successfully',
          data: viewSpecificAccommodationViewsMocks.accommodationItem,
        },
      });
    });

    const store = mockStore({});
    await store.dispatch(singleAccommodation(1))
      .then(async () => {
        const calledActions = store.getActions();
        expect(calledActions).toEqual(
          [
            {
              type: 'VIEW_SINGLE_ACCOMMODATION_SUCCESS',
              payload: viewSpecificAccommodationViewsMocks.accommodationItem,
            },
          ],
        );
      });
  });

  it('Should mock request and return error response', async () => {
    const errorResp = {
      status: 404,
      response: {
        data: {
          message: 'No accommodation exist',
        },
      },
    };

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.reject(errorResp);
    });

    const store = mockStore({});
    await store.dispatch(singleAccommodation(1))
      .catch((error) => {
        expect(error.status).toEqual(errorResp.status);
        expect(error.response.message).toEqual(errorResp.response.message);
      });
  });

  it('Should mock accommodation and return network error', async () => {
    const errorResp = {
      status: 400,
      request: {
        data: {
          message: 'Network Error',
        },
      },
    };

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.reject(errorResp);
    });

    const store = mockStore({});
    await store.dispatch(singleAccommodation(1))
      .catch((error) => {
        expect(error.status).toEqual(errorResp.status);
        expect(error.request.data.message).toEqual(errorResp.request.data.message);
      });
  });

  it('Should mock accommodation and return server error', async () => {
    const errorResp = {
      status: 500,
      server: {
        data: {
          message: 'Server error',
        },
      },
    };

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.reject(errorResp);
    });

    const store = mockStore({});
    await store.dispatch(singleAccommodation(1))
      .catch((error) => {
        expect(error.status).toEqual(errorResp.status);
        expect(error.request.data.message).toEqual(errorResp.request.data.message);
      });
  });
});
