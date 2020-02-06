import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import getAllNotifications from '../../redux/actions/notifications/getAllNotificationActions';
import {
  GET_ALL_NOTIFICATIONS_ERROR, GET_ALL_NOTIFICATIONS_SUCCESS, SPINNER_STATUS,

} from '../../redux/actionTypes/notificationActionTypes';
import apiCall from '../../helpers/apiCall';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
let store;
jest.fn();
describe('Get All Notifications Actions Test Suite', () => {
  beforeEach(() => {
    moxios.install(apiCall);
  });

  afterEach(() => {
    moxios.uninstall(apiCall);
  });

  it('Should dispatch GET_ALL_NOTIFICATIONS_SUCCESS', async () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          data: 'Success',
        },
      });
    });
    const expectedActions = [
      {
        spinner: false,
        type: SPINNER_STATUS,
      },
      {
        payload: 'Success',
        type: GET_ALL_NOTIFICATIONS_SUCCESS,
      }];
    store = mockStore({});
    await store.dispatch(getAllNotifications())
      .then(async () => {
        const calledActions = store.getActions();
        expect(calledActions).toEqual(expectedActions);
      });
  });

  it('Should dispatch GET_ALL_NOTIFICATIONS_ERROR', async () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 404,
        response: {
          data: 'Error',
        },
      });
    });
    const expectedActions = [
      {
        spinner: false,
        type: SPINNER_STATUS,
      },
      {
        payload: {
          data: 'Error',
        },
        type: GET_ALL_NOTIFICATIONS_ERROR,
      }];
    store = mockStore({});
    await store.dispatch(getAllNotifications())
      .then(async () => {
        const calledActions = store.getActions();
        expect(calledActions).toEqual(expectedActions);
      });
  });
});
