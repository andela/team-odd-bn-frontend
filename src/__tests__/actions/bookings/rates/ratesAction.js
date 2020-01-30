import moxios from 'moxios';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { mockActionData } from '../../../../__mocks__/RatingMocks/rates';
import apiCall from '../../../../helpers/apiCall';
import {
  inputData,
  onEditInputAction,
  submitRatingAction,
} from '../../../../redux/actions/ratingAction';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Expect to return rate action input', () => {
  const { inputDataMock } = mockActionData;
  const actionData = inputData('any_action', 'any_data');
  it('Should return action with input and payload', () => {
    expect(actionData).toEqual(inputDataMock);
  });
});

describe('Expect to edit input action', () => {
  const initialState = {};
  const store = mockStore(initialState);
  store.dispatch(onEditInputAction('I am data'));

  it('Should return action with input and payload', () => {
    const actions = store.getActions();
    const expectedPayload = { type: 'ADD_ACCOMMODATION_RATE_INPUT', payload: 'I am data' };
    expect(actions).toEqual([expectedPayload]);
  });
});


describe('Expect to submit rate', () => {
  const { submitRateSuccessMock } = mockActionData;
  beforeEach(() => {
    moxios.install(apiCall);
  });

  afterEach(() => {
    moxios.uninstall(apiCall);
  });
  const initialState = {};
  const store = mockStore(initialState);
  store.dispatch(onEditInputAction('I am data'));

  it('Should submit rate data successfully', async () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          message: 'Rate submit successfully',
        },
      });
    });

    await store.dispatch(submitRatingAction('house is good'))
      .then(async () => {
        const calledActions = store.getActions();
        expect(calledActions).toEqual(submitRateSuccessMock);
      });
  });
});

describe('Expect to mock error and reject rate submission', () => {
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
          message: 'feedback message should not not be empty',
        },
      },
    };

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.reject(errorResp);
    });

    const store = mockStore({});
    await store.dispatch(submitRatingAction(''))
      .catch((error) => {
        expect(error.status).toEqual(errorResp.status);
        expect(error.response.message).toEqual(errorResp.response.message);
      });
  });
});

describe('Expect to mock network error when sending rate feedback', () => {
  beforeEach(() => {
    moxios.install(apiCall);
  });

  afterEach(() => {
    moxios.uninstall(apiCall);
  });

  it('Should mock and return network error', async () => {
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
    await store.dispatch(submitRatingAction(''))
      .catch((error) => {
        expect(error.status).toEqual(errorResp.status);
        expect(error.request.data.message).toEqual(errorResp.request.data.message);
      });
  });
});

describe('Expect to mock rate submission request on crashed server', () => {
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
    await store.dispatch(submitRatingAction(''))
      .catch((error) => {
        expect(error.status).toEqual(errorResp.status);
        expect(error.request.data.message).toEqual(errorResp.request.data.message);
      });
  });
});
