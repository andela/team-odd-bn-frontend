import React from 'react';
import { mount, shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Requests from '../../../containers/TripsContainer/SingleRequest';
import { init } from '../../../__mocks__/trips/requests';

const mockStore = configureStore([]);
let wrapper;
let store;

describe('Test Signup page ', () => {
  it('Test snapshot using the initial state', () => {
    store = mockStore(init);
    wrapper = mount(
      <Provider store={store}>
        <Router>
          <Requests
            match={{
              params: {
                tripRequestId: 4,
              },
            }}
            cities={init.trips.tripRequests.getCity}
          />
,
        </Router>
      </Provider>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
