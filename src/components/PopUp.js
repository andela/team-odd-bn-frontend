import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../assets/css/table.scss';
import { fetchRequestsAction, paginationAction } from '../redux/actions/tripsActions/fetchRequests';


class Requests extends Component {
  render() {
    const { popUp, display } = this.props;

    return (
      <div
        className="confirmPopup"
        style={{
          display,
        }}
      >
        {popUp}

      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  stateObject: state,
});
const actions = {
  fetchRequestsAction,
  paginationAction,
};

export default connect(mapStateToProps, actions)(Requests);
