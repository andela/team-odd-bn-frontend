import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import Requests from '../../../views/trips/RequestsView';
import { requestViewData } from '../../../__mocks__/trips/requests';
import initialState from '../../../redux/store/initialState';


const mockStore = configureStore([]);
let wrapper;
let store;
describe('Test Signup page ', () => {
  it('Test snapshot using the initial state', () => {
    store = mockStore(initialState);
    wrapper = mount(

      <Provider store={store}>
        <Router>
          <Requests data={requestViewData} />
        </Router>

      </Provider>,

    );
    expect(wrapper).toMatchSnapshot();
  });
});
