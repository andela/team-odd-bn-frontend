import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import EditTrip from '../../../views/trips/DeleteComment';
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


    const cancel = wrapper.find('#cancel');
    const deleteMessage = wrapper.find('#delete');
    cancel.simulate('click');
    deleteMessage.simulate('click');
    cancel.simulate('click');
    expect(jest.fn().mock.calls).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });
});
