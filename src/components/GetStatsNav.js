import React, { Component } from 'react';
import '../assets/css/table.scss';
import propTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { getStatsAction, handleInputsAction, updateTripCounter } from '../redux/actions/tripsActions/statsTripActions';
import '../assets/css/statsTrip.scss';
import {changePageNo} from '../redux/actions/PaginationAction'

export class StatsNav extends Component {
  state = {
    styleButtonOneway: '#34C6F3',
    styleButtonRoundTrip:'white',
    styleButtonMulti:'white',
  }
  render() {
    const {
      getStatsAction, getStats, handleInputsAction,changePageNo
    } = this.props;    
    const { onewayTripStats, multiTripStats, roundTripStats} = getStats.tripStatsCounter;
    return (
      <>
        <div className="statNavContainer">
          <div className="statsTitle">Trip stats</div>
          <div className="dateContainer">
            <div>
              <label>From</label>
              <input
                type="date"
                required
                onChange={(e) => handleInputsAction({ from: e.target.value })}
              />
            </div>
            <div>
              <label>To</label>
              <input
                type="date"
                required
                onChange={(e) => handleInputsAction({ to: e.target.value })}
              />
            </div>
          </div>
          <div className="headButttons">
            <div  style={{ backgroundColor: this.state.styleButtonOneway }} className="oneWayLink">
              <NavLink
                ref="linkToTrip"
                activeClassName="active"
                to="/trips/stats"
                onClick={() => {
                const tripType = 1;
                changePageNo(0);
                  handleInputsAction({ tripType, date: getStats.getStatsInput });
                  this.setState({
                    styleButtonOneway: '#34C6F3',
                    styleButtonRoundTrip:'white',
                    styleButtonMulti:'white',
                  })
                }}
              >
                One Way Trip (
                {onewayTripStats&&onewayTripStats.tripsCounter}
                )
              </NavLink>
            </div>
            <div style={{ backgroundColor: this.state.styleButtonRoundTrip }} className="roundTrip">
              <NavLink
                ref="linkToTrip"
                activeClassName="active"
                to="/trips/stats"
                onClick={() => {
                  const tripType = 2;
                  changePageNo(0);
                  handleInputsAction({ tripType, date: getStats.getStatsInput });
                  this.setState({
                    styleButtonOneway: 'white',
                    styleButtonRoundTrip:'#34C6F3',
                    styleButtonMulti:'white',
                  })
                }}
              >
                Round Trip (
                  {roundTripStats&&roundTripStats.tripsCounter}
                )
              </NavLink>
            </div>
            <div style={{ backgroundColor: this.state.styleButtonMulti }}>
              <NavLink
                ref="linkToTrip"
                activeClassName="active"
                to="/trips/stats"
                onClick={() => {
                  const tripType = 3;
                  changePageNo(0);
                  handleInputsAction({tripType, date: getStats.getStatsInput });
                  this.setState({
                    styleButtonOneway: 'white',
                    styleButtonRoundTrip:'white',
                    styleButtonMulti:'#34C6F3',
                  })
                }}
              >
                Multi City (
                  {multiTripStats&&multiTripStats.tripsCounter}
                )
              </NavLink>
            </div>
          </div>
        </div>
        <div className="searchBtn">
          <button onClick={() => getStatsAction(getStats.getStatsInput)}>
            Search
          </button>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return { getStats: state.trips.getStats };
};
const actions = { getStatsAction, handleInputsAction, updateTripCounter,changePageNo };
export default connect(mapStateToProps, actions)(StatsNav);
