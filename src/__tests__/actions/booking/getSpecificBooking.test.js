import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import { openSingleBooking, getSingleBooking } from '../../../redux/actions/bookings/viewSingleBookingActions';
import {
  GET_SINGLE_BOOKINGS_SUCCESS,
  GET_SINGLE_BOOKINGS_ERROR,
  OPEN_SINGLE_BOOKING,
} from '../../../redux/actionTypes/bookingActionTypes';
import apiCall from '../../../helpers/apiCall';
import mockData from '../../../__mocks__/fileMock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
let store;
jest.fn();
describe('Get single Bookings Actions Test Suite', () => {
  beforeEach(() => {
    moxios.install(apiCall);
  });

  afterEach(() => {
    moxios.uninstall(apiCall);
  });

  it('Should dispatch GET_SINGLE_BOOKINGS_SUCCESS', async () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(mockData.singleBookingSuccessResponse);
    });
    const expectedActions = [
      {
        payload: {
          message: 'Success',
        },
        type: GET_SINGLE_BOOKINGS_SUCCESS,
      },
    ];
    store = mockStore({});
    await store.dispatch(getSingleBooking(1)).then(async () => {
      const calledActions = store.getActions();
      expect(calledActions).toEqual(expectedActions);
    });
  });

  it('Should dispatch GET_SINGLE_BOOKINGS_ERROR', async () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(mockData.singleBookingErrorResponse);
    });
    const expectedActions = [
      {
        payload: {
          message: 'Error',
        },
        type: GET_SINGLE_BOOKINGS_ERROR,
      },
    ];
    store = mockStore({});
    await store.dispatch(getSingleBooking()).then(async () => {
      const calledActions = store.getActions();
      expect(calledActions).toEqual(expectedActions);
    });
  });
  it('Should dispatch OPEN_SINGLE_BOOKING', async () => {
    const expectedActions = {
      payload: true,
      type: OPEN_SINGLE_BOOKING,
    };

    const calledActions = openSingleBooking(true);
    expect(calledActions).toEqual(expectedActions);
  });
});
