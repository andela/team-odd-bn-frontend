import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../assets/css/table.scss';
import RequestsView from '../../views/trips/RequestsView';
import Dashboard from '../../views/Dashboard/sidebar';
import { fetchRequestsAction, paginationAction } from '../../redux/actions/tripsActions/fetchRequests';
import verifyToken from '../../helpers/verifyToken';
import tokenExist from '../../helpers/tokenExist';


class Requests extends Component {
  async componentDidMount() {
    if (!verifyToken(tokenExist)) {
      return this.props.history.push('/signin');
    }
    const { fetchRequestsAction } = this.props;
    await fetchRequestsAction();
    if (this.props.profileError.error
  || this.props.profileError.message === 'You have provided an invalid token') {
      return this.props.history.push('/signin');
    }
  }

  render() {
    return (
      <Dashboard>
        <RequestsView />
      </Dashboard>
    );
  }
}
export const mapStateToProps = (state) => ({
  profileError: state,
});
const actions = {
  fetchRequestsAction,
  paginationAction,
};

export default connect(mapStateToProps, actions)(Requests);
