import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow, mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import ApprovalTable from '../../containers/Trips/ApprovalTable';
import initialState from '../../redux/store/initialState';


const mockStore = configureStore([]);
let wrapper;
let store;
describe('Approval Table Test Suite ', () => {
  it('Test snapshot using the initial state', () => {
    store = mockStore(initialState);
    wrapper = mount(
      <Provider store={store}>
        <Router>
          <ApprovalTable availRequests={jest.fn()} updateSpinnerStatus={jest.fn()} />
        </Router>
      </Provider>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
