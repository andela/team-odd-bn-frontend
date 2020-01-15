import React from 'react';
import { shallow } from 'enzyme';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { RoundTrip, mapStateToProps } from '../../containers/trips/RoundTrip';
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
    <RoundTrip {...mockData.roundTripProps} store={store} />,
  );
  return wrapper;
};

describe('Profile Test Suite', () => {
  it('Should Mount Successfully', () => {
    const component = setUp(mockData.roundTripMainState);

    const handleSubmitSpy = jest.spyOn(component.instance(), 'handleSubmit');
    const originId = { target: { name: 'originId', value: 'Nairobi' } };
    const destinationId = { target: { name: 'destinationId', value: 'Kigali' } };
    const reason = { target: { name: 'reason', value: 'Meeting with department heads' } };
    const startDate = { target: { name: 'startDate', value: '2030-01-01' } };
    const returnDate = { target: { name: 'returnDate', value: '2030-02-02' } };

    component.find('[data-test="originId"]').simulate('change', originId);
    component.find('[data-test="destinationId"]').simulate('change', destinationId);
    component.find('[data-test="reason"]').simulate('change', reason);
    component.find('[data-test="startDate"]').simulate('change', startDate);
    component.find('[data-test="returnDate"]').simulate('change', returnDate);
    component.find('form').simulate('submit', {
      preventDefault() {},
    });
    expect(handleSubmitSpy).toReturn();
  });

  it('Should Pass New props Successfully', () => {
    const component = setUp(mockData.roundTripMainState);
    component.setProps({ roundTrip: mockData.props.roundTrip });
    const reason = { target: { name: 'reason', value: 'w' } };
    const startDate = { target: { name: 'startDate', value: '2019-01-01' } };
    const returnDate = { target: { name: 'returnDate', value: '2019-02-02' } };
    component.find('[data-test="reason"]').simulate('change', reason);
    component.find('[data-test="startDate"]').simulate('change', startDate);
    component.find('[data-test="returnDate"]').simulate('change', returnDate);
  });

  it('Should Pass New props Successfully', () => {
    const component = setUp(mockData.roundTripMainState);
    component.setProps({ roundTrip: mockData.props.roundTrip });
    const reason = { target: { name: 'reason', value: '' } };
    const startDate = { target: { name: 'startDate', value: '' } };
    const returnDate = { target: { name: 'returnDate', value: '' } };
    component.find('[data-test="reason"]').simulate('change', reason);
    component.find('[data-test="startDate"]').simulate('change', startDate);
    component.find('[data-test="returnDate"]').simulate('change', returnDate);
  });

  it('Should Pass New props Successfully', () => {
    const component = setUp(mockData.roundTripMainState);
    component.setProps({ roundTrip: mockData.props.roundTrip });
  });

  it('Should return initial data', () => {
    const stores = testStore(mockData.roundTripMainState);
    expect(shallow(
      <RoundTrip spinner={null} store={stores} />,
    )).toMatchSnapshot();
  });

  it('Should return the initial State', () => {
    const initialState = {
      trips: {
        roundTrip: {
          roundTripMessage: null,
          roundTripError: null,
          spinner: null,
          spinnerError: null,
        },
      },
      allCities: {
        cities: null,
        citiesError: null,
      },
    };
    const component = setUp(mockData.roundTripMainState);
    expect(mapStateToProps(initialState).cities).toEqual(null);
  });
});
