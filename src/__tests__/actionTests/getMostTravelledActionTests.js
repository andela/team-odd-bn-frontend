
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import getMostTravelledActions from '../../redux/actions/getMostTravelledAccommodationAction';
import {
  GET_MOST_TRAVELLED_ERROR, GET_MOST_TRAVELLED_SUCCESS
} from '../../redux/actionTypes/accommodationActionTypes';
import apiCall from '../../helpers/apiCall';
import mockData from '../../__mocks__/fileMock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
let store;
jest.fn();
describe('Get Most Travelled Destination Actions Test Suite', () => {
  beforeEach(() => {
    moxios.install(apiCall);
  });

  afterEach(() => {
    moxios.uninstall(apiCall);
  });

  it('Should dispatch GET_MOST_TRAVELLED_SUCCESS', async () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(mockData.successResponse);
    });
    const expectedActions = [
      {
        payload: {
          message: 'Success',
        },
        type: GET_MOST_TRAVELLED_SUCCESS,
      }];
    store = mockStore({});
    await store.dispatch(getMostTravelledActions())
      .then(async () => {
        const calledActions = store.getActions();
        expect(calledActions).toEqual(expectedActions);
      });
  });

  it('Should dispatch GET_MOST_TRAVELLED_ERROR', async () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(mockData.errorResponse);
    });
    const expectedActions = [
      {
        payload: {
          message: 'Error',
        },
        type: GET_MOST_TRAVELLED_ERROR,
      }];
    store = mockStore({});
    await store.dispatch(getMostTravelledActions())
      .then(async () => {
        const calledActions = store.getActions();
        expect(calledActions).toEqual(expectedActions);
      });
  });
});
