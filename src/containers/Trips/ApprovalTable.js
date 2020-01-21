import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../assets/css/table.scss';
import AvailRequestsView from '../../views/trips/ManagerView';
import Dashboard from '../../views/Dashboard/sidebar';
import availRequests, { updateSpinnerStatus } from '../../redux/actions/tripsActions/availRequestsActions';

class ApprovalRequests extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    const { availRequests, updateSpinnerStatus } = this.props;
    await updateSpinnerStatus();
    await availRequests();
  }

  render() {
    const { availRequests } = this.props.stateObject;
    const data = availRequests && availRequests.allRequests && availRequests.allRequests.data;
    return (
      <Dashboard>
        <AvailRequestsView data={data} />
      </Dashboard>
    );
  }
}

export const mapStateToProps = (state) => ({
  stateObject: state.trips,
});

export default connect(mapStateToProps, { availRequests, updateSpinnerStatus })(ApprovalRequests);
