import React, { Component } from 'react';
import { connect } from 'react-redux';
import AvailSingleRequestView from '../../views/trips/AvailSingleRequestView';
import Dashboard from '../../views/Dashboard/sidebar';
import {
  fetchSingleRequestsAction,
  fetchRequestCommentsAction,
} from '../../redux/actions/tripsActions/fetchRequests';
import approveRequest from '../../redux/actions/tripsActions/approveRequestAction';

class Requests extends Component {
  async componentDidMount() {
    const {
      fetchSingleRequestsAction,
      fetchRequestCommentsAction,
    } = this.props;
    const { tripRequestId, query } = this.props.match.params;
    await fetchSingleRequestsAction(tripRequestId);
    await fetchRequestCommentsAction(tripRequestId);
  }

  render() {
    console.log('this.props.stateObject.trips.availRequests', this.props.stateObject.trips.availRequests);

    const {
      singleRequestData,
      requestCommentsData,
    } = this.props.stateObject.trips.requests;
    const { approveRequestMessage } = this.props.stateObject.trips.availRequests;
    const data = singleRequestData ? singleRequestData.data : [];

    return (
      <Dashboard>
        <AvailSingleRequestView
          data={{ trips: data, comments: requestCommentsData }}
          approveRequest={this.props.approveRequest}
          params={this.props.match.params}
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
  approveRequest,
};

export default connect(mapStateToProps, actions)(Requests);
