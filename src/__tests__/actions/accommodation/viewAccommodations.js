import moxios from 'moxios';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import {
  returnData,
  viewActionAccommodation,
  getAllLikesDislikes
} from '../../../redux/actions/allAccommodation';
import { viewAccommodationProps } from '../../../__mocks__/accommodation/viewAccommodation';
import apiCall from '../../../helpers/apiCall';


const middlewares = [thunk];
const mockStore = configureStore(middlewares);


describe('Expect to return payload', () => {
  const payload = returnData('FEKE_ACTION', 'I am data');
  it('Expect to return new action data', () => {
    expect(payload).toEqual({ type: 'FEKE_ACTION', payload: 'I am data' });
  });
});

describe('Expect to mock all accomodation request', () => {
  beforeEach(() => {
    moxios.install(apiCall);
  });

  afterEach(() => {
    moxios.uninstall(apiCall);
  });

  it('Should mock return available accomodations', async () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          message: 'Created successfully',
          data: viewAccommodationProps.allAccomodation,
        },
      });
    });

    const store = mockStore({});
    await store.dispatch(viewActionAccommodation())
      .then(async () => {
        const calledActions = store.getActions();
        expect(calledActions).toEqual(
          [
            {
              type: 'VIEW_ALL_ACCOMMODATION_SUCCESS',
              payload: viewAccommodationProps.allAccomodation,
            },
          ],
        );
      });
  });
});


describe('Expect to mock likes and dislikes of specific accomodation', () => {
  beforeEach(() => {
    moxios.install(apiCall);
  });

  afterEach(() => {
    moxios.uninstall(apiCall);
  });

  it('Should mock and likes dislikes of accomodations', async () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          message: 'like and dislike successfully',
          data: viewAccommodationProps.allLikesDislakes,
        },
      });
    });

    const store = mockStore({});
    await store.dispatch(getAllLikesDislikes(viewAccommodationProps.allAccomodation))
      .then(async () => {
        const calledActions = store.getActions();
        expect(calledActions).toEqual(
          [
            {
              type: 'VIEW_ALL_LIKES_SUCCESS',
              payload: [viewAccommodationProps.allLikesDislakes],
            },
          ],
        );
      });
  });
});


describe('Expect to mock error and reject to view accommodation', () => {
  beforeEach(() => {
    moxios.install(apiCall);
  });

  afterEach(() => {
    moxios.uninstall(apiCall);
  });

  it('Should mock request and return error response', async () => {
    const errorResp = {
      status: 400,
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
    await store.dispatch(viewActionAccommodation())
      .catch((error) => {
        expect(error.status).toEqual(errorResp.status);
        expect(error.response.message).toEqual(errorResp.response.message);
      });
  });
});


describe('Expect to mock request without internet', () => {
  beforeEach(() => {
    moxios.install(apiCall);
  });

  afterEach(() => {
    moxios.uninstall(apiCall);
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
    await store.dispatch(viewActionAccommodation())
      .catch((error) => {
        expect(error.status).toEqual(errorResp.status);
        expect(error.request.data.message).toEqual(errorResp.request.data.message);
      });
  });
});

describe('Expect to mock and send request on crashed server', () => {
  beforeEach(() => {
    moxios.install(apiCall);
  });

  afterEach(() => {
    moxios.uninstall(apiCall);
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
    await store.dispatch(viewActionAccommodation())
      .catch((error) => {
        expect(error.status).toEqual(errorResp.status);
        expect(error.request.data.message).toEqual(errorResp.request.data.message);
      });
  });
});
