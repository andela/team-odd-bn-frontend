import { updateTripItem } from '../../../redux/reducers/multicityReducer';
import multicityReducer from '../../../redux/reducers/multicityReducer';
import { multicityTripAction } from '../../../__mocks__/trips/multicity';

describe('Expect to update item in existing array', () => {
  it('Should update item from current trip request', () => {
    const {
      currentMulticityRequest,
      expectedEditedMulticityRequest,
      multicityInputDataPayload,
    } = multicityTripAction;
    const updatedRequest = updateTripItem(currentMulticityRequest, multicityInputDataPayload);
    expect(updatedRequest).toEqual(expectedEditedMulticityRequest);
  });
});

describe('Expect reducer to add new trip request from store', () => {
  it('It should add more trip request', () => {
    const { currentMulticityRequest, addMoreButton, addNewTripRequestResult } = multicityTripAction;
    const expectedInput = multicityReducer(currentMulticityRequest, addMoreButton[0]);
    expect(expectedInput).toEqual(addNewTripRequestResult);
  });
});

describe('Expect reducer to remove a trip request', () => {
  it('It should remove specific request', () => {
    const { currentMulticityRequest, removeReducerAction, removedDataNewObject } = multicityTripAction;
    const expectedInput = multicityReducer(currentMulticityRequest, removeReducerAction);
    expect(expectedInput).toEqual(removedDataNewObject);
  });
});

describe('Expect reducer to edit a trip request', () => {
  it('It should edit specific request', () => {
    const { currentMulticityRequest, editSpecificTripRequest, editSpecificTripRequestReason } = multicityTripAction;
    const expectedInput = multicityReducer(currentMulticityRequest, editSpecificTripRequest);
    expect(expectedInput).toEqual(editSpecificTripRequestReason);
  });
});

describe('Expect reducer to send successffully message', () => {
  it('It should create trip request', () => {
    const { currentMulticityRequest, successfullyMessage, successfullyTripRequestSaved } = multicityTripAction;
    const expectedInput = multicityReducer(currentMulticityRequest, successfullyMessage);
    expect(expectedInput.data).toEqual(successfullyTripRequestSaved.data);
  });
});

describe('Expect reducer to send error message', () => {
  it('It should create trip request', () => {
    const { currentMulticityRequest, erroTripRequestSaved, errorTripRequestMessage } = multicityTripAction;
    const expectedInput = multicityReducer(currentMulticityRequest, errorTripRequestMessage);
    expect(expectedInput).toEqual(erroTripRequestSaved);
  });
});
