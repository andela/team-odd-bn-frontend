
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import getProfile from '../../redux/actions/profileActions';
import updateProfile, { uploadImage, updateSpinnerStatus } from '../../redux/actions/updateProfileActions';
import {
  FETCH_PROFILE_SUCCESS, SPINNER_STATUS, FETCH_PROFILE_ERROR, UPDATE_PROFILE_SUCCESS, UPDATE_PROFILE_ERROR, UPLOAD_IMAGE_SUCCESS, UPLOAD_IMAGE_ERROR,
} from '../../redux/actionTypes/profileActionTypes';
import apiCall from '../../helpers/apiCall';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
let store;
jest.fn();
describe('Profile Actions Test Suite', () => {
  beforeEach(() => {
    moxios.install(apiCall);
  });

  afterEach(() => {
    moxios.uninstall(apiCall);
  });

  it('Should dispatch FETCH_PROFILE_SUCCESS', async () => {
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
        type: SPINNER_STATUS,
      },
      {
        payload: {
          message: 'Success',
        },
        type: FETCH_PROFILE_SUCCESS,
      }];
    store = mockStore({});
    await store.dispatch(getProfile())
      .then(async () => {
        const calledActions = store.getActions();
        expect(calledActions).toEqual(expectedActions);
      });
  });

  it('Should dispatch FETCH_PROFILE_ERROR', async () => {
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
        spinner: false,
        type: SPINNER_STATUS,
      }, {

        payload: {
          message: 'Error',
        },
        type: FETCH_PROFILE_ERROR,
      }];
    store = mockStore({});
    await store.dispatch(getProfile())
      .then(async () => {
        const calledActions = store.getActions();
        expect(calledActions).toEqual(expectedActions);
      });
  });

  it('Should dispatch UPDATE_PROFILE_SUCCESS', async () => {
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
        type: SPINNER_STATUS,
      }, {
        payload: 'Success',
        type: UPDATE_PROFILE_SUCCESS,
      }];
    store = mockStore({});
    await store.dispatch(updateProfile())
      .then(async () => {
        const calledActions = store.getActions();
        expect(calledActions).toEqual(expectedActions);
      });
  });

  it('Should dispatch UPDATE_PROFILE_ERROR', async () => {
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
        spinner: false,
        type: SPINNER_STATUS,
      }, {
        payload: {
          message: 'Error',
        },
        type: UPDATE_PROFILE_ERROR,
      }];
    store = mockStore({});
    await store.dispatch(updateProfile())
      .then(async () => {
        const calledActions = store.getActions();
        expect(calledActions).toEqual(expectedActions);
      });
  });

  it('Should dispatch UPLOAD_IMAGE_SUCCESS', async () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          secure_url: 'Success',
        },
      });
    });
    const expectedActions = [{
      payload: 'Success',
      type: UPLOAD_IMAGE_SUCCESS,
    }];
    store = mockStore({});
    await store.dispatch(uploadImage())
      .then(async () => {
        const calledActions = store.getActions();
        expect(calledActions).toEqual(expectedActions);
      });
  });
  it('Should dispatch UPLOAD_IMAGE_ERROR', async () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 404,
        response: {
          data: 'error',
        },
      });
    });
    const expectedActions = [{
      payload: {
        data: 'error',
      },
      type: UPLOAD_IMAGE_ERROR,
    }];
    store = mockStore({});
    await store.dispatch(uploadImage())
      .then(async () => {
        const calledActions = store.getActions();
        expect(calledActions).toEqual(expectedActions);
      });
  });
});
