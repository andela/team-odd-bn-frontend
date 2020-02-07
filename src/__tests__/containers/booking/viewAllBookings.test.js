import React from 'react';
import { shallow, mount } from 'enzyme';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import {
  AllBookings,
  mapStateToProps,
} from '../../../containers/bookings/viewAllBookings';
import {
  tempViewAllBooking,
  initiaState,
} from '../../../__mocks__/booking/booking';
import rootReducer from '../../../redux/reducers/index';

const middlewares = [thunk];
const testStore = (state) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
  return createStoreWithMiddleware(rootReducer, state);
};
const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<AllBookings {...tempViewAllBooking} store={store} />);
  return wrapper;
};
const emptySetUp = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<AllBookings {...tempViewAllBooking} store={store} />);
  return wrapper;
};
describe('View all bookings test suite', () => {
  it('Should handleSubmit Successfully', () => {
    const component = setUp(tempViewAllBooking);
    const handleSubmitSpy = jest.spyOn(component.instance(), 'handleSubmit');
    component.find('[data-test="view-single-booking"]').simulate('click', {
      preventDefault() {},
    });
    expect(handleSubmitSpy).toHaveBeenCalled();
  });
  it('should map state to props', () => {
    expect(mapStateToProps(initiaState)).toBeDefined();
  });
});
