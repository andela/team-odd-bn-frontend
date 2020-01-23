import moxios from 'moxios';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import {
  editInputForm,
  addMoreTrip,
  removeMoreTrip,
  editMultipleTrip,
  sendMulticityTrip,
} from '../../../redux/actions/multicityActions';
import { multicityTripAction } from '../../../__mocks__/trips/multicity';
import apiCall from '../../../helpers/apiCall';


const middlewares = [thunk];
const mockStore = configureStore(middlewares);


describe('Expect to return payload', () => {
  const payload = editInputForm('FEKE_ACTION', 'I am data');
  it('Expect to return new action data', () => {
    expect(payload).toEqual({ type: 'FEKE_ACTION', payload: 'I am data' });
  });
});


describe('Expect to mock action add more button', () => {
  const initialState = {};
  const store = mockStore(initialState);
  store.dispatch(addMoreTrip());

  it('Expect to return new action data', () => {
    const newActions = store.getActions();
    expect(newActions).toEqual(multicityTripAction.addMoreButton);
  });
});

describe('Expect to mock action remove more trip', () => {
  const initialState = {};
  const store = mockStore(initialState);
  store.dispatch(removeMoreTrip(2));

  it('Expect to return new action data', () => {
    const newActions = store.getActions();
    expect(newActions).toEqual(multicityTripAction.removeMoreButton);
  });
});

describe('Expect to mock action remove more trip', () => {
  const data = { name: 'reason', value: 'why' };
  const initialState = {};
  const store = mockStore(initialState);
  store.dispatch(editMultipleTrip(data));

  it('Expect to return new action data', () => {
    const newActions = store.getActions();
    expect(newActions).toEqual(multicityTripAction.editMultipleTrip);
  });
});


describe('Expect to mock trip request', () => {
  beforeEach(() => {
    moxios.install(apiCall);
  });

  afterEach(() => {
    moxios.uninstall(apiCall);
  });

  it('Should mock success request', async () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 201,
        response: {
          message: 'Created successfully',
        },
      });
    });

    const store = mockStore({});
    await store.dispatch(sendMulticityTrip(multicityTripAction.multicityObjectData))
      .then(async () => {
        const calledActions = store.getActions();
        expect(calledActions).toEqual(multicityTripAction.expectedMulticityReturn);
      });
  });
});

describe('Expect to mock error and reject trip request', () => {
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
          message: 'invalid data',
        },
      },
    };

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.reject(errorResp);
    });

    const store = mockStore({});
    await store.dispatch(sendMulticityTrip(multicityTripAction.multicityObjectData))
      .catch((error) => {
        equal(error.status, errorResp.status);
        equal(error.response.message, errorResp.response.message);
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

  it('Should mock data return network error', async () => {
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
    await store.dispatch(sendMulticityTrip(multicityTripAction.multicityObjectData))
      .catch((error) => {
        expect(error.status).toEqual(errorResp.status);
        expect(error.request.data.message).toEqual(errorResp.request.data.message);
      });
  });
});

describe('Expect to mock send request on crashed server', () => {
  beforeEach(() => {
    moxios.install(apiCall);
  });

  afterEach(() => {
    moxios.uninstall(apiCall);
  });

  it('Should mock data and return server error', async () => {
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
    await store.dispatch(sendMulticityTrip(multicityTripAction.multicityObjectData))
      .catch((error) => {
        equal(error.status, errorResp.status);
        equal(error.server.data.message, errorResp.server.data.message);
      });
  });
});

