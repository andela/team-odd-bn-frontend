import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../assets/css/table.scss';
import SearchTripStats from '../../views/trips/SearchTripStats';
import Dashboard from '../../views/Dashboard/sidebar';
import { getStatsAction, updateTripCounter } from '../../redux/actions/tripsActions/statsTripActions';
import verifyToken from '../../helpers/verifyToken';
import tokenExist from '../../helpers/tokenExist';

class Requests extends Component {
  async componentDidMount() {
    if (!verifyToken(tokenExist)) {
      return this.props.history.push('/signin');
    }
    const { getStatsAction } = this.props;
    await getStatsAction({ tripType: '1', from: '2020-01-22', to: '2020-01-26' });


    if (this.props.profileError.error
  || this.props.profileError.message === 'You have provided an invalid token') {
      return this.props.history.push('/signin');
    }
  }

  render() {
    const { getStatsData, getStatsInput, tripStatsCounter } = this.props.stateObject.trips.getStats;
    const data = getStatsData && getStatsData.userTrips;
    return (
      <Dashboard>
        <SearchTripStats data={data} getStatsInput={getStatsInput} tripStatsCounter={tripStatsCounter} />
      </Dashboard>
    );
  }
}

export const mapStateToProps = (state) => ({
  stateObject: state,
});
const actions = {
  getStatsAction,
  updateTripCounter,
};

export default connect(mapStateToProps, actions)(Requests);
