import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Requests from '../../../containers/TripsContainer/Requests';
import initialState from '../../../redux/store/initialState';
import {
  init,
} from '../../../__mocks__/trips/requests';

const mockStore = configureStore([]);
let wrapper;
let store;

describe('Test Signup page ', () => {
  it('Test snapshot using the initial state', () => {
    store = mockStore(initialState);
    wrapper = mount(<Provider store={store}><Router><Requests /></Router></Provider>);
    expect(wrapper).toMatchSnapshot();
  });
  it('Test snapshot using the initial state', () => {
    store = mockStore(init);
    wrapper = mount(<Provider store={store}><Router><Requests /></Router></Provider>);
    expect(wrapper).toMatchSnapshot();
  });
});
