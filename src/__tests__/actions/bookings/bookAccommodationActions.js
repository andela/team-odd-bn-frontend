import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  updateBookAccommodationInput,
  bookAccommodationAction,
} from '../../../redux/actions/bookings/bookAnAccommodation';
import {
  BOOK_ACCOMMODATION_SUCCESS,
  BOOK_ACCOMMODATION_ERROR,
  UPDATE_INPUT,
} from '../../../redux/actionTypes/bookingActionTypes';
import apiCall from '../../../helpers/apiCall';
import {
  errorTypeResponse,
  errorResponse,
  errorRequest,
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

  it('it Should dispatch book accommodation Errror', async () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
        response: {
          message: 'first name should be valid',
        },
      });
    });

    store = mockStore({});
    const { dispatch } = store;
    await dispatch(bookAccommodationAction({ tripId: 90 })).then(async () => {
      const calledActions = store.getActions();

      expect(calledActions).toEqual([
        {
          type: 'BOOK_ACCOMMODATION_ERROR',
          payload: {
            message: 'first name should be valid',
          },
        },
      ]);
    });
  });
  it('it Should dispatch book accommodation success', async () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          message: 'first name should be valid',
        },
      });
    });

    store = mockStore({});
    const { dispatch } = store;
    await dispatch(bookAccommodationAction({ tripId: 90 })).then(async () => {
      const calledActions = store.getActions();

      expect(calledActions).toEqual([
        {
          type: 'BOOK_ACCOMMODATION_SUCCESS',
          payload: {
            message: 'first name should be valid',
          },
        },
      ]);
    });
  });
  it('it Should dispatchupdate inputs success', async () => {
    store = mockStore({});
    const { dispatch } = store;
    dispatch(updateBookAccommodationInput({ paginationEnd: 5, paginationStart: 0 }));
    const calledActions = store.getActions();
    expect(calledActions).toEqual([
      {
        payload: {
          paginationEnd: 5,
          paginationStart: 0,
        },
        type: UPDATE_INPUT,
      },
    ]);
  });
});
