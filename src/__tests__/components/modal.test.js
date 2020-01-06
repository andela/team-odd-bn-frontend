import React from 'react';
import { shallow, mount } from 'enzyme';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { Modal, mapStateToProps } from '../../components/modal';
import {
  modalProps,
  modalSpinnerProps,
  mainState,
} from '../../__mocks__/accommodation/createAccommodation';
import rootReducer from '../../redux/reducers/index';

const middlewares = [thunk];
const testStore = (state) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
  return createStoreWithMiddleware(rootReducer, state);
};
const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<Modal {...modalProps} store={store} />, {
    attachTo: document.body,
  });
  return wrapper;
};


describe('Rooms modal test suite', () => {
  beforeEach(() => {
    const div = document.createElement('div');
    div.setAttribute('id', 'room-name');
    document.body.appendChild(div);
  });
  beforeEach(() => {
    const select = document.createElement('select');
    select.innerHTML = `
        <option selected value="Single">Single</option>
        <option value="Double">Double</option>
    `;
    select.setAttribute('id', 'room-type');
    document.body.appendChild(select);
  });
  beforeEach(() => {
    const div = document.createElement('div');
    div.setAttribute('id', 'rooms');
    document.body.appendChild(div);
  });


  it('Should append new row Successfully', () => {
    const component = setUp(mainState);
    const appendRowSpy = jest.spyOn(component.instance(), 'appendRow');
    component.find('[data-test="addNew-row"]').simulate(
      'submit',
      {
        preventDefault() {},
      },
    );
    expect(appendRowSpy).not.toHaveBeenCalled();
  });
  it('Should handle submit Successfully', () => {
    const component = setUp(mainState);
    const handleSubmitSpy = jest.spyOn(component.instance(), 'handleSubmit');
    component.find('[data-test="addNew-room"]').simulate(
      'submit',
      {
        preventDefault() {},
      },
    );
    expect(handleSubmitSpy).not.toHaveBeenCalled();
  });
  it('Should close modal Successfully', () => {
    const component = setUp(mainState);
    const closeModalSpy = jest.spyOn(component.instance(), 'closeModal');
    component.find('[data-test="close-modal"]').simulate('click', {
      preventDefault() {},
    });
    component.find('[data-test="close-modal"]').simulate('KeyDown', {
      preventDefault() {},
    });
    expect(closeModalSpy).toHaveBeenCalled();
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
