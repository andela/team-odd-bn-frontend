import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import getCities from '../../redux/actions/getAllCitiesActions';
import {
  GET_ALL_CITIES_ERROR, GET_ALL_CITIES_SUCCESS,
} from '../../redux/actionTypes/tripsActionTypes';
import apiCall from '../../helpers/apiCall';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
let store;
jest.fn();
describe('Get All Cities Actions Test Suite', () => {
  beforeEach(() => {
    moxios.install(apiCall);
  });

  afterEach(() => {
    moxios.uninstall(apiCall);
  });

  it('Should dispatch GET_ALL_CITIES_SUCCESS', async () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          message: 'Success',
        },
      });
    });
    const expectedActions = [
      {
        payload: {
          message: 'Success',
        },
        type: GET_ALL_CITIES_SUCCESS,
      }];
    store = mockStore({});
    await store.dispatch(getCities())
      .then(async () => {
        const calledActions = store.getActions();
        expect(calledActions).toEqual(expectedActions);
      });
  });

  it('Should dispatch GET_ALL_CITIES_ERROR', async () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 404,
        response: {
          message: 'Error',
        },
      });
    });
    const expectedActions = [
      {
        payload: {
          message: 'Error',
        },
        type: GET_ALL_CITIES_ERROR,
      }];
    store = mockStore({});
    await store.dispatch(getCities())
      .then(async () => {
        const calledActions = store.getActions();
        expect(calledActions).toEqual(expectedActions);
      });
  });
});
