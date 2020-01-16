import React from 'react';
import { shallow } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import CommonRequests from '../../../views/trips/CommonRequests';
import {
  entities,
  navs,
  tableHeads,
} from '../../../__mocks__/trips/requests';

let wrapper;

describe('Test Signup page ', () => {
  it('Test snapshot using the initial state', () => {
    wrapper = shallow(

      <Router>
        <CommonRequests entities={entities} navs={navs} tableHeads={tableHeads} />
      </Router>,

    );
    expect(wrapper).toMatchSnapshot();
  });
});
