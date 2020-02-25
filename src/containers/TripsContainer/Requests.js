import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../assets/css/table.scss';
import RequestsView from '../../views/trips/RequestsView';
import Dashboard from '../../views/Dashboard/sidebar';
import { fetchRequestsAction, paginationAction } from '../../redux/actions/tripsActions/fetchRequests';
import verifyToken from '../../helpers/verifyToken';
import tokenExist from '../../helpers/tokenExist';
import { searchResults, searchInput } from '../../redux/actions/search/searchAction';


class Requests extends Component {
  UNSAFE_componentWillMount() {
    const data = '';
    this.props.searchResults(data);
    this.props.searchInput(data);
  }

  async componentDidMount() {
    const { fetchRequestsAction, searchResults, history, profileError } = this.props;
    await searchResults();
    await fetchRequestsAction();
    if (profileError.error
  || profileError.status === 401) {
      return history.push('/signin');
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
  searchInput,
};

export default connect(mapStateToProps, actions)(Requests);
