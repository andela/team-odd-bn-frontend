import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import apiCall from '../../../helpers/apiCall';
import {
  addNewRoomsAction,
  createAccommodationAction,
  newAccommodationPhotos,
  roomsModalAction,
  getCitiesAction,
  newAccommodationInput,
  updateSpinnerStatus,
} from '../../../redux/actions/createAccommodationActions';

import {
  retrievedCitiesAction,
  retrievedCitiesApi,
  createAccommodationApi,
  createAccommodationMockAction,
  createAccommodationMockError,
  createAccommodationMockErrors,
  createAccommodationMockApiError,
  createAccommodationMockApiErrors,
} from '../../../__mocks__/accommodation/createAccommodation';
import {
  OPEN_ROOMS_MODAL,
  NEW_ADDED_ROOMS,
  NEW_ACCOMMODATION_INPUT,
  NEW_ADDED_PHOTOS,
  SPINNER_STATUS,
} from '../../../redux/actionTypes/accommodationActionTypes';

let store;
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Password reset Actions', () => {
  beforeEach(() => {
    moxios.install(apiCall);
  });

  afterEach(() => {
    moxios.uninstall(apiCall);
  });
  it('it Should dispatch getCitiesAction', async () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(retrievedCitiesApi);
    });
    store = mockStore({});
    await store.dispatch(getCitiesAction()).then(async () => {
      const calledActions = store.getActions();
      expect(calledActions).toEqual(retrievedCitiesAction);
    });
  });
  it('it Should dispatch on createAccommodation', async () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(createAccommodationApi);
    });
    store = mockStore({});
    await store
      .dispatch(createAccommodationAction())
      .then(async () => {
        const calledActions = store.getActions();
        expect(calledActions).toEqual(createAccommodationMockAction);
      });
  });
  it('it Should dispatch error on createAccommodation', async () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.reject(createAccommodationMockApiError);
    });
    store = mockStore({});
    await store.dispatch(createAccommodationAction()).then(async () => {
      const calledActions = store.getActions();
      expect(calledActions).toEqual(createAccommodationMockError);
    });
  });
  it('it Should dispatch array of errors on createAccommodation', async () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.reject(createAccommodationMockApiErrors);
    });
    store = mockStore({});
    await store.dispatch(createAccommodationAction()).then(async () => {
      const calledActions = store.getActions();
      expect(calledActions).toEqual(createAccommodationMockErrors);
    });
  });
  it('it Should update roomsModalAction', async () => {
    const openModal = {
      type: OPEN_ROOMS_MODAL,
      openRoomsModal: true,
    };
    const calledActions = roomsModalAction(true);
    expect(calledActions).toEqual(openModal);
  });
  it('it Should update addNewRoomsAction', async () => {
    const newRoom = {
      type: NEW_ADDED_ROOMS,
      rooms: {
        id: 1,
        name: 'Kagera',
      },
    };
    const calledActions = addNewRoomsAction({ id: 1, name: 'Kagera' });
    expect(calledActions).toEqual(newRoom);
  });
  it('it Should update newAccommodationInput', async () => {
    const newAccommodation = {
      type: NEW_ACCOMMODATION_INPUT,
      payload: 'Kagera',
    };
    const calledActions = newAccommodationInput('Kagera');
    expect(calledActions).toEqual(newAccommodation);
  });
  it('it Should update newAccommodationPhotos', async () => {
    const newphotos = {
      type: NEW_ADDED_PHOTOS,
      photos: 'me.jpg',
    };
    const calledActions = newAccommodationPhotos('me.jpg');
    expect(calledActions).toEqual(newphotos);
  });
  it('it Should update updateSpinnerStatus', async () => {
    const spinner = {
      type: SPINNER_STATUS,
      spinner: true,
    };
    const calledActions = updateSpinnerStatus(true);
    expect(calledActions).toEqual(spinner);
  });
});
