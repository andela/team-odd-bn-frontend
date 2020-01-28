
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import getAllBookingsActions from '../../redux/actions/bookings/getAllBookingsActions';
import {
  GET_ALL_BOOKINGS_SUCCESS, GET_ALL_BOOKINGS_ERROR,
} from '../../redux/actionTypes/bookingActionTypes';
import apiCall from '../../helpers/apiCall';
import mockData from '../../__mocks__/fileMock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
let store;
jest.fn();
describe('Get All Bookings Actions Test Suite', () => {
  beforeEach(() => {
    moxios.install(apiCall);
  });

  afterEach(() => {
    moxios.uninstall(apiCall);
  });

  it('Should dispatch GET_ALL_BOOKINGS_SUCCESS', async () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(mockData.successResponse);
    });
    const expectedActions = [
      {
        payload: {
          message: 'Success',
        },
        type: GET_ALL_BOOKINGS_SUCCESS,
      }];
    store = mockStore({});
    await store.dispatch(getAllBookingsActions())
      .then(async () => {
        const calledActions = store.getActions();
        expect(calledActions).toEqual(expectedActions);
      });
  });

  it('Should dispatch GET_ALL_BOOKINGS_ERROR', async () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(mockData.errorResponse);
    });
    const expectedActions = [
      {
        payload: {
          message: 'Error',
        },
        type: GET_ALL_BOOKINGS_ERROR,
      }];
    store = mockStore({});
    await store.dispatch(getAllBookingsActions())
      .then(async () => {
        const calledActions = store.getActions();
        expect(calledActions).toEqual(expectedActions);
      });
  });
});
