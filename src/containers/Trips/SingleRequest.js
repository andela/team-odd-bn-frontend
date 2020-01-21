import React, { Component } from 'react';
import { connect } from 'react-redux';
import SingleRequestView from '../../views/trips/SingleRequestView';
import Dashboard from '../../views/Dashboard/sidebar';
import {
  fetchSingleRequestsAction,
  fetchRequestCommentsAction,
} from '../../redux/actions/tripsActions/fetchRequests';
import verifyToken from '../../helpers/verifyToken';
import tokenExist from '../../helpers/tokenExist';

class Requests extends Component {
  async componentDidMount() {
    if (!verifyToken(tokenExist)) {
      return this.props.history.push('/signin');
    }
    const {
      fetchSingleRequestsAction,
      fetchRequestCommentsAction,
    } = this.props;
    const { tripRequestId } = this.props.match.params;
    await fetchSingleRequestsAction(tripRequestId);
    await fetchRequestCommentsAction(tripRequestId);
    if (this.props.profileError.error
      || this.props.profileError.message === 'You have provided an invalid token') {
      return this.props.history.push('/signin');
    }
  }

  render() {
    const {
      singleRequestData,
      requestCommentsData,
    } = this.props.stateObject.trips.requests;
    const data = singleRequestData ? singleRequestData.data : [];

    return (
      <Dashboard>
        <SingleRequestView
          data={{ trips: data, comments: requestCommentsData }}
        />
      </Dashboard>
    );
  }
}

export const mapStateToProps = (state) => ({
  stateObject: state,
});
const actions = {
  fetchRequestCommentsAction,
  fetchSingleRequestsAction,
};

export default connect(mapStateToProps, actions)(Requests);
