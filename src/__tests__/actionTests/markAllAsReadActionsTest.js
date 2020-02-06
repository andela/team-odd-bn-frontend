
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import markAllAsRead from '../../redux/actions/notifications/markAllAsReadActions';
import {
  MARK_ALL_AS_READ_ERROR, MARK_ALL_AS_READ_SUCCESS,
} from '../../redux/actionTypes/notificationActionTypes';
import apiCall from '../../helpers/apiCall';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
let store;
jest.fn();
describe('Mark All As Read Actions Test Suite', () => {
  beforeEach(() => {
    moxios.install(apiCall);
  });

  afterEach(() => {
    moxios.uninstall(apiCall);
  });

  it('Should dispatch MARK_ALL_AS_READ_SUCCESS', async () => {
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
        type: MARK_ALL_AS_READ_SUCCESS,
      }];
    store = mockStore({});
    await store.dispatch(markAllAsRead())
      .then(async () => {
        const calledActions = store.getActions();
        expect(calledActions).toEqual(expectedActions);
      });
  });

  it('Should dispatch MARK_ALL_AS_READ_ERROR', async () => {
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
        type: MARK_ALL_AS_READ_ERROR,
      }];
    store = mockStore({});
    await store.dispatch(markAllAsRead())
      .then(async () => {
        const calledActions = store.getActions();
        expect(calledActions).toEqual(expectedActions);
      });
  });
});
