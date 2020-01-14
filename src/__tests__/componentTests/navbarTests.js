import React from 'react';
import { shallow } from 'enzyme';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { Navbar, mapStatetoProps } from '../../components/Navbar';
import rootReducer from '../../redux/reducers/index';
import mockData from '../../__mocks__/fileMock';

const middlewares = [thunk];

const testStore = (state) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
  return createStoreWithMiddleware(rootReducer, state);
};

const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(
    <Navbar {...mockData.Navbarprops} {...mockData.profileProps} store={store} />,
  );
  return wrapper;
};

describe('Navbar Test Suite', () => {
  it('Should Mount Successfully', () => {
    const component = setUp(mockData.navbarMainState);
    expect(component.exists()).toBe(true);
  });

  it('Should Mount With empty profile successfully', () => {
    const component = setUp(mockData.navbarMainState);
    component.setProps({ profile: null });
    expect(component.exists()).toBe(true);
  });

  it('Should return initial data', () => {
    expect(mapStatetoProps(mockData.navbarInitialState).profile).toEqual(null);
  });
});
