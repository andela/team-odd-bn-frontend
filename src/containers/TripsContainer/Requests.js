import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../assets/css/table.scss';
import RequestsView from '../../views/trips/RequestsView';
import Dashboard from '../../views/Dashboard/sidebar';
import { fetchRequestsAction, paginationAction } from '../../redux/actions/tripsActions/fetchRequests';
import verifyToken from '../../helpers/verifyToken';
import tokenExist from '../../helpers/tokenExist';
import { searchResults } from '../../redux/actions/search/searchAction';


class Requests extends Component {
  UNSAFE_componentWillMount() {
    const data = '';
    this.props.searchResults(data);
  }

  async componentDidMount() {
    const { fetchRequestsAction, searchResults } = this.props;
    await searchResults();
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
  searchResults,
};

export default connect(mapStateToProps, actions)(Requests);
