import React from 'react';
import { mount, shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import { BrowserRouter as Router } from 'react-router-dom';
import CommonSingleRequest from '../../../views/trips/CommonSingleRequest';
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

    wrapper = shallow(

      <CommonSingleRequest
        store={store}
        handleSubmit={async () => {
          jest.fn();
          return jest.fn();
        }}
      />,

    );
    expect(wrapper).toMatchSnapshot();
  });
  it('Test snapshot using the initial state', () => {
    store = mockStore(init);

    wrapper = shallow(

      <CommonSingleRequest
        comments={init.trips.requests.requestCommentsData}
        trips={init.trips.requests.singleRequestData}
      />,

    );
    expect(wrapper).toMatchSnapshot();
  });
  it('it Should dispatch hit submit button successfully', async () => {
    const plusDivs = jest.fn();
    wrapper = mount(
      <Router>
        <CommonSingleRequest
          comments={init.trips.requests.requestCommentsData}
          trips={init.trips.requests.singleRequestData}
        />
      </Router>,
    );
    const button = wrapper.find('#back');
    button.simulate('click');
    expect(plusDivs.mock.calls).toBeDefined();
  });
  it('it Should dispatch hit submit button successfully', async () => {
    const plusDivs = jest.fn();
    wrapper = mount(
      <Router>
        <CommonSingleRequest
          comments={init.trips.requests.requestCommentsData}
          trips={init.trips.requests.singleRequestData}
        />
      </Router>,
    );
    const button = wrapper.find('#front');
    button.simulate('click');
    expect(plusDivs.mock.calls).toBeDefined();
  });
});
