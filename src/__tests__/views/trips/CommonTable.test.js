import React from 'react';
import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter as Router } from 'react-router-dom';
import Requests from '../../../views/trips/CommonTable';
import initialState from '../../../redux/store/initialState';

const mockStore = configureStore([]);
let wrapper;
let store;
const trips = { singleRequestData: { data: { trips: [] } } };
const comments = [];
const navs = [];
const tableHeads = [
  {
    attribute: 'First name',
  },
];
const entities = [];
describe('Test Signup page ', () => {
  it('Test snapshot using the initial state', () => {
    store = mockStore(initialState);

    wrapper = mount(
      <Provider store={store}>
        <Router>
          <Requests
            trips={trips}
            comments={comments}
            navs={navs}
            tableHeads={tableHeads}
            postCommentsAction={jest.fn()}
            entities={entities}
          />
        </Router>
      </Provider>,

    );
    expect(wrapper).toMatchSnapshot();
  });
});
