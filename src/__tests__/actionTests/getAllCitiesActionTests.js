import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import { getTripAction } from '../../redux/actions/tripsActions/onewayActions';
import {
  GET_CITY_ERROR, GET_CITY_SUCCESS, UPDATE_SPINNER_STATUS,

} from '../../redux/actionTypes/tripsActionType';
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

  it('Should dispatch GET_CITY_SUCCESS', async () => {
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
        spinner: false,
        type: UPDATE_SPINNER_STATUS,
      },
      {
        payload: {
          message: 'Success',
        },
        type: GET_CITY_SUCCESS,
      }];
    store = mockStore({});
    await store.dispatch(getTripAction())
      .then(async () => {
        const calledActions = store.getActions();
        expect(calledActions).toEqual(expectedActions);
      });
  });
});
