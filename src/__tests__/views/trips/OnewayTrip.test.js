import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { mount, shallow } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import stores from '../../../redux/store';
import OnewayTrip from '../../../containers/TripsContainer/oneway';
import { Oneway as OneWayNamed } from '../../../containers/TripsContainer/oneway';
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

describe('Expect to update the page on oneway trip request', () => {

  const prevProps = {
    tripState: {
      trips: {
        tripRequests: {
          payload: undefined,
        },
      },
    },
  };

  const mockProps = {
    tripState: {
      trips: {
        tripRequests: {
          payload: {
            message: 'Trip requested successfully',
            data: {
              id: 1,
            },
          },
        },
      },
    },
    history: {
      push: jest.fn(),
    },
  };

  const component = shallow(
    <OneWayNamed {...mockProps} />,
  );

  it('Should render new page successfully', () => {
    const redirectTrip = jest.spyOn(component.instance(), 'componentDidUpdate');
    component.instance().componentDidUpdate(prevProps);
    expect(redirectTrip).toHaveBeenCalledWith(prevProps);
  });
});
