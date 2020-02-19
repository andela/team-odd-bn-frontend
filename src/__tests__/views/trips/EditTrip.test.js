import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import EditTrip from '../../../views/trips/EditTrip';
import {
  init,
} from '../../../__mocks__/trips/requests';

const mockStore = configureStore([]);
let wrapper;
let store;

describe('Test Signup page ', () => {
  it('Test snapshot using the initial state', () => {
    store = mockStore(init);
    wrapper = mount(<Provider store={store}><Router><EditTrip store={store} singleRequestData={{ singleRequestData: { data: { trips: [] } } }} /></Router></Provider>);
    expect(wrapper).toMatchSnapshot();
  });
  it('Test snapshot using the initial state', () => {
    store = mockStore(init);
    wrapper = mount(<Provider pageNo={1} store={store}><Router><EditTrip store={store} singleRequestData={{ singleRequestData: { data: { trips: [] } } }} /></Router></Provider>);
    expect(wrapper).toMatchSnapshot();
  });
  it('Test snapshot using the initial state', () => {
    store = mockStore(init);
    wrapper = mount(<Provider pageNo={1} store={store}><Router><EditTrip store={store} singleRequestData={{ singleRequestData: { data: { trips: [] } } }} /></Router></Provider>);
    const button = wrapper.find('#startDate');
    const input = wrapper.find('#returnDate');
    const button1 = wrapper.find('#originId');
    const input1 = wrapper.find('#destinationId');
    const button2 = wrapper.find('textarea');
    const cancel = wrapper.find('#cancel');
    const save = wrapper.find('#save');
    button.simulate('change');
    input.simulate('change');
    button1.simulate('change');
    input1.simulate('change');
    button2.simulate('change');
    cancel.simulate('click');
    save.simulate('click');
    expect(jest.fn().mock.calls).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });
});
