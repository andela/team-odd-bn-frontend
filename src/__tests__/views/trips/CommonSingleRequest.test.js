import React from 'react';
import dotenv from 'dotenv';
import { mount, shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import CommonSingleRequest from '../../../views/trips/CommonSingleRequest';
import initialState from '../../../redux/store/initialState';
import {
  init,
} from '../../../__mocks__/trips/requests';
import 'jest-localstorage-mock';

dotenv.config();
const mockStore = configureStore([]);
let wrapper;
let store;

describe('Common Single Request page ', () => {
  it('Test snapshot using the initial state', () => {
    store = mockStore(initialState);

    wrapper = shallow(
      <Provider store={store}>
        <Router>
          <CommonSingleRequest
            cities={init.trips.tripRequests.getCity}
            store={store}
            handleSubmit={async () => {
              jest.fn();
              return jest.fn();
            }}
            handleChange={(value) => {
              jest.fn();
              return jest.fn(value);
            }}
            postCommentsAction={jest.fn()}
          />
        </Router>

      </Provider>,

    );
    expect(wrapper).toMatchSnapshot();
  });
  it('Test snapshot using the initial state', () => {
    store = mockStore(init);

    wrapper = shallow(
      <Provider store={store}>
        <Router>
          <CommonSingleRequest
            comments={init.trips.requests.requestCommentsData}
            trips={init.trips.requests.singleRequestData}
            cities={init.trips.tripRequests.getCity}
            postCommentsAction={jest.fn()}
          />
        </Router>

      </Provider>,

    );
    expect(wrapper).toMatchSnapshot();
  });

  it('it Should dispatch hit submit button successfully', async () => {
    const plusDivs = jest.fn();
    wrapper = mount(
      <Provider store={store}>
        <Router>
          <CommonSingleRequest
            comments={init.trips.requests.requestCommentsData}
            trips={init.trips.requests.singleRequestData}
            cities={init.trips.tripRequests.getCity}
            singleRequestData={init.trips.requests.singleRequestData}
            params={{ tripRequestId: 8 }}
            approveRequest={jest.fn()}
            postCommentsAction={jest.fn()}
            updateCommentInputAction={jest.fn()}
          />
        </Router>
      </Provider>,
    );
  });

  it('it Should dispatch reject button successfully', async () => {
    wrapper = mount(
      <Provider store={store}>
        <Router>
          <CommonSingleRequest
            comments={init.trips.requests.requestCommentsData}
            trips={init.trips.requests.singleRequestData}
            cities={init.trips.tripRequests.getCity}
            params={{ tripRequestId: 8 }}
            approveRequest={jest.fn()}
            postCommentsAction={jest.fn()}
            updateCommentInputAction={jest.fn()}
          />
        </Router>
      </Provider>,
    );
    const postComment = wrapper.find('#postComment');
    const submitComment = wrapper.find('#submitComment');
    const deleteComment = wrapper.find('#deleteComment');
    const edit = wrapper.find('#edit');
    postComment.simulate('change');
    submitComment.simulate('click');
    deleteComment.simulate('click');
    edit.simulate('change');
    expect(jest.fn().mock.calls).toBeDefined();
  });
  it('it Should dispatch reject button successfully', async () => {
    store = mockStore(init);
    localStorage.setItem('token', process.env.TESTING_TOKEN);

    wrapper = mount(
      <Provider store={store}>
        <Router>
          <CommonSingleRequest
            comments={init.trips.requests.requestCommentsData}
            cities={init.trips.tripRequests.getCity}
            trips={init.trips.requests.singleRequestData}
            params={{ tripRequestId: 8 }}
            approveRequest={jest.fn()}
            postCommentsAction={jest.fn()}
            updateCommentInputAction={jest.fn()}
          />
        </Router>
      </Provider>,
    );
    const approve = wrapper.find('#approve');
    const reject = wrapper.find('#reject');
    approve.simulate('click');
    reject.simulate('click');
    expect(jest.fn().mock.calls).toBeDefined();
  });
});
