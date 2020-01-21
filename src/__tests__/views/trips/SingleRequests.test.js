import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Requests from '../../../containers/TripsContainer/SingleRequest';
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
          <Requests
            match={{
              params: {
                tripRequestId: 4,
              },
            }}
          />
        </Router>
      </Provider>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
