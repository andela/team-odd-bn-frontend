import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../assets/css/table.scss';
import { Redirect } from 'react-router-dom';
import AvailRequestsView from '../../views/trips/ManagerView';
import Dashboard from '../../views/Dashboard/sidebar';
import availRequests, { updateSpinnerStatus } from '../../redux/actions/tripsActions/availRequestsActions';
import verifyToken from '../../helpers/verifyToken';
import { searchResults } from '../../redux/actions/search/searchAction';

class ApprovalRequests extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  UNSAFE_componentWillMount() {
    const data = '';
    this.props.searchResults(data);
  }

  async componentDidMount() {
    const { availRequests, updateSpinnerStatus } = this.props;
    await updateSpinnerStatus();
    await availRequests();
  }

  render() {
    const { availRequests } = this.props.stateObject;
    return (
      <>
        <Dashboard>
          {verifyToken(localStorage.getItem('token')).roleId === 6 ? (
            <AvailRequestsView />
          ) : (
            <Redirect to="/requests" />
          )}
        </Dashboard>
      </>
    );
  }
}

export const mapStateToProps = (state) => ({
  stateObject: state.trips,
});

export default connect(mapStateToProps, { availRequests, updateSpinnerStatus, searchResults })(ApprovalRequests);
