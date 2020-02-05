import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import apiCall from '../../../helpers/apiCall';
import { likeAction, dislikeAction } from '../../../redux/actions/likeAndDislikeAction';
import { LIKES_SUCCESS, DISLIKES_SUCCESS, LIKE_AND_DISLIKES_ERROR } from '../../../redux/actionTypes/accommodationActionTypes';
import likeAndDislikeMockData from '../../../__mocks__/accommodation/likeAndDislike';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Expect to mock likes accomodation', () => {
  beforeEach(() => {
    moxios.install(apiCall);
  });

  afterEach(() => {
    moxios.uninstall(apiCall);
  });

  it('Should trigger likes of accommodations', async () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(likeAndDislikeMockData.likeInput);
    });

    const store = mockStore({});
    await store.dispatch(likeAction({ id: 45 }))
      .then(async () => {
        const calledActions = store.getActions();
        expect(calledActions).toEqual(likeAndDislikeMockData.likeExpectedResponse);
      });
  });

  it('Should mock request and return error response', async () => {
    const errorResp = {
      status: 500,
      response: {
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
    await store.dispatch(likeAction({ id: 45 }))
      .catch((error) => {
        expect(error.status).toEqual(errorResp.status);
        expect(error.response.data.message).toEqual(errorResp.response.data.message);
      });
  });
});

describe('Expect to mock dislikes accomodation', () => {
  beforeEach(() => {
    moxios.install(apiCall);
  });

  afterEach(() => {
    moxios.uninstall(apiCall);
  });

  it('Should trigger likes of accommodations', async () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(likeAndDislikeMockData.dislikeInput);
    });

    const store = mockStore({});
    await store.dispatch(dislikeAction({ id: 45 }))
      .then(async () => {
        const calledActions = store.getActions();
        expect(calledActions).toEqual(likeAndDislikeMockData.dislikeExpectedResponse);
      });
  });

  it('Should mock request and return error response', async () => {
    const errorResp = {
      status: 500,
      response: {
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
    await store.dispatch(dislikeAction({ id: 45 }))
      .catch((error) => {
        expect(error.status).toEqual(errorResp.status);
        expect(error.response.data.message).toEqual(errorResp.response.data.message);
      });
  });
});
