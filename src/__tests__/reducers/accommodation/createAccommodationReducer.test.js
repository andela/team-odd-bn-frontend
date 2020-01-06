import createAccommodationReducer from '../../../redux/reducers/accommodation/createAccommodationReducer';
import {
  accommodationInputAction,
  photosInputAction,
  openModalAction,
  addNewRoomsAction,
  getCitiesSuccessAction,
  createAccommodation,
  spinnerStatus,
  createAccommodationError,
} from '../../../__mocks__/accommodation/createAccommodation';

describe('Create accommodation reducer', () => {
  const initialState = {
    photos: '',
  };
  it('Should act on NEW_ACCOMMODATION_INPUT', () => {
    const triggerState = createAccommodationReducer(
      {},
      accommodationInputAction,
    );
    expect(triggerState).toEqual({
      ...accommodationInputAction.payload,
    });
  });
  it('Should act on NEW_ADDED_PHOTOS', () => {
    const triggerState = createAccommodationReducer(
      initialState,
      photosInputAction,
    );
    expect(triggerState).toEqual({
      photos: [photosInputAction.photos],
    });
  });
  it('Should act on OPEN_ROOMS_MODAL', () => {
    const triggerState = createAccommodationReducer(
      {},
      openModalAction,
    );
    expect(triggerState).toEqual({
      openRoomsModal: openModalAction.openRoomsModal,
    });
  });
  it('Should act on NEW_ADDED_ROOMS', () => {
    const triggerState = createAccommodationReducer(
      { rooms: [] },
      addNewRoomsAction,
    );
    expect(triggerState).toEqual({
      rooms: [addNewRoomsAction.rooms],
    });
  });
  it('Should act on NEW_ADDED_ROOMS', () => {
    const triggerState = createAccommodationReducer({}, getCitiesSuccessAction);
    expect(triggerState).toEqual({
      retrievedCities: getCitiesSuccessAction.retrievedCities,
    });
  });
  it('Should act on CREATE_ACCOMMODATION_SUCCESS', () => {
    const triggerState = createAccommodationReducer(
      {},
      createAccommodation,
    );
    expect(triggerState).toEqual({
      payload: createAccommodation.payload,
    });
  });
  it('Should act on CREATE_ACCOMMODATION_ERROR', () => {
    const triggerState = createAccommodationReducer(
      {},
      createAccommodationError,
    );
    expect(triggerState).toEqual({
      error: createAccommodationError.error,
    });
  });
  it('Should act on SPINNER_STATUS', () => {
    const triggerState = createAccommodationReducer({}, spinnerStatus);
    expect(triggerState).toEqual({
      spinner: spinnerStatus.spinner,
    });
  });
});
