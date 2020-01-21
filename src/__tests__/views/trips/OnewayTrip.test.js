import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { mount, shallow } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import stores from '../../../redux/store';
import OnewayTrip from '../../../containers/TripsContainer/oneway';
import initialState from '../../../redux/store/initialState';
import {
  redirectInitialState1,
  spinnerInitialState1,
} from '../../../__mocks__/auth/authMock';

const mockStore = configureStore([]);
let wrapper;
let store;

describe('On Oneway page', () => {
  it('Test spinner action', () => {
    store = mockStore(spinnerInitialState1);

    wrapper = shallow(
      <Router>
        <OnewayTrip
          store={store}
          handleSubmit={async () => {
            jest.fn();
            return jest.fn();
          }}
        />
      </Router>,
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('Spinner').length).toEqual(0);
  });
  it('Test snapshot using the initial state', () => {
    store = mockStore(initialState);

    wrapper = shallow(
      <Router>
        <OnewayTrip
          store={store}
          handleSubmit={async () => {
            jest.fn();
            return jest.fn();
          }}
        />
      </Router>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    wrapper = mount(
      <Provider store={stores}>
        <Router>
          <OnewayTrip
            handleSubmit={async () => {
              jest.fn();
              return jest.fn();
            }}
          />
        </Router>
      </Provider>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
