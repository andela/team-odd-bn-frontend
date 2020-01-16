import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../assets/css/table.scss';
import RequestsView from '../../views/trips/RequestsView';
import Dashboard from '../../views/Dashboard/sidebar';
import { fetchRequestsAction } from '../../redux/actions/tripsActions/fetchRequests';

class Requests extends Component {
  async componentDidMount() {
    const { fetchRequestsAction } = this.props;
    await fetchRequestsAction();
  }

  render() {
    const { requestsData } = this.props.stateObject.trips.requests;
    const data = requestsData && requestsData.data;
    return (
      <Dashboard>
        <RequestsView data={data} />
      </Dashboard>
    );
  }
}

export const mapStateToProps = (state) => ({
  stateObject: state,
});
const actions = {
  fetchRequestsAction,
};

export default connect(mapStateToProps, actions)(Requests);
