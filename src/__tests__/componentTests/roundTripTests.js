import React from 'react';
import { shallow } from 'enzyme';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { RoundTrip } from '../../containers/TripsContainer/RoundTrip';
import rootReducer from '../../redux/reducers/index';
import mockData from '../../__mocks__/fileMock';

const middlewares = [thunk];
let store;

const testStore = (state) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
  return createStoreWithMiddleware(rootReducer, state);
};

const setUp = (initialState = {}) => {
  store = testStore(initialState);
  const wrapper = shallow(
    <RoundTrip {...mockData.tripStateProps} store={store} />,
  );
  return wrapper;
};

describe('Round Trip Test Suite', () => {
  it('Should Mount Successfully', () => {
    const component = setUp(mockData.roundTripMainState);

    const handleSubmitSpy = jest.spyOn(component.instance(), 'handleSubmit');
    const reason = { target: { name: 'reason', value: 'Meeting with department heads' } };
    component.find('[data_test="reason"]').simulate('change', reason);
    component.find('form').simulate('submit', {
      preventDefault() {},
    });
    expect(handleSubmitSpy).toReturn();
  });
});
