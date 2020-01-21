import React from 'react';
import { shallow, mount } from 'enzyme';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { CreateAccommodation, mapStateToProps } from '../../../containers/accommodation/createAccommodation';
import {
  createAccommodationProps,
  modalSpinnerProps,
  mainState,
} from '../../../__mocks__/accommodation/createAccommodation';
import rootReducer from '../../../redux/reducers/index';

const middlewares = [thunk];
const testStore = (state) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
  return createStoreWithMiddleware(rootReducer, state);
};
const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(
    <CreateAccommodation {...createAccommodationProps} store={store} />,
  );
  return wrapper;
};

describe('Create accommodation test suite', () => {
  it('Should submit accommodation data Successfully', () => {
    const component = setUp(mainState);
    const handleSubmitSpy = jest.spyOn(component.instance(), 'handleSubmit');
    component.find('[data-test="name"]').simulate('change', 'Akagera room');
    component
      .find('[data-test="createAccommodation-form"]')
      .simulate('submit', {
        preventDefault() {},
      });
    expect(handleSubmitSpy).not.toHaveBeenCalled();
  });
  it('Should handle change data Successfully', () => {
    const component = setUp(mainState);
    const handleChangeSpy = jest.spyOn(component.instance(), 'handleChange');
    const addRoomsSpy = jest.spyOn(component.instance(), 'addRooms');
    component
      .find('[data-test="accommodation-description"]')
      .simulate('change',
        { target: { value: 'nice place to stay' } });


    component
      .find('[data-test="accommodation-city"]')
      .simulate('change', { target: { value: 'Kigali' } });
    expect(handleChangeSpy).toHaveBeenCalled();


    component.find('[data-test="addRooms-btn"]').simulate('click');
    expect(addRoomsSpy).not.toHaveBeenCalled();
  });


  it('should render spinner', () => {
    const wrapper = shallow(<CreateAccommodation {...modalSpinnerProps} />);
    expect(
      wrapper.find('[data-test="createAccommodation-spinner"]').length,
    ).toBe(1);
  });
  it('should map state to props', () => {
    const initialState = {
      accommodation: {
        createAccommodation: {
          rooms: [],
          photos: [],
          spinner: false,
        },
      },
    };
    expect(
      mapStateToProps(initialState).stateObject.accommodation,
    ).toBeDefined();
  });
});
