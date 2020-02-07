import React from 'react';
import { shallow, mount } from 'enzyme';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { ViewSingleBooking, mapStateToProps } from '../../../containers/bookings/viewSingleBooking';
import { defaultProps, initiaState, tempViewAllBooking } from '../../../__mocks__/booking/booking';
import rootReducer from '../../../redux/reducers/index';

const middlewares = [thunk];
const testStore = (state) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
  return createStoreWithMiddleware(rootReducer, state);
};
const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<ViewSingleBooking {...defaultProps} store={store} />);
  return wrapper;
};

const emptySetUp = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<ViewSingleBooking {...tempViewAllBooking} store={store} />);
  return wrapper;
};
describe('View single booking test suite', () => {
  it('Should close modal Successfully', () => {
    const component = setUp(defaultProps);
    const closeModalSpy = jest.spyOn(component.instance(), 'closeModal');
    component.find('[data-test="close-modal"]').simulate('click', {
      preventDefault() {},
    });
    component.find('[data-test="close-modal"]').simulate('KeyDown', {
      preventDefault() {},
    });
    expect(closeModalSpy).toHaveBeenCalled();
  });
  it('Should close modal Successfully', () => {
    const component = setUp(defaultProps);
    const closeModalSpy = jest.spyOn(component.instance(), 'closeModal');
    component.find('[data-test="close-modal-btn"]').simulate('submit', {
      preventDefault() {},
    });
    expect(closeModalSpy).toHaveBeenCalled();
  });
  it('Should close modal Successfully', () => {
    const component = emptySetUp(tempViewAllBooking);
    const closeModalSpy = jest.spyOn(component.instance(), 'closeModal');
    component.find('[data-test="close-modal-btn"]').simulate('submit', {
      preventDefault() {},
    });
    expect(closeModalSpy).toHaveBeenCalled();
  });
  it('should map state to props', () => {
    expect(mapStateToProps(initiaState)).toBeDefined();
  });
});
