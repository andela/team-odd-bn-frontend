import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { Redirect } from 'react-router-dom';
import {
  getTripAction, storeInputsAction, onewayAction, updateSpinnerStatus,
} from '../../redux/actions/tripsActions/onewayActions';
import Spinner from '../../components/Spinner';
import OnewayView from '../../views/trips/oneWayView';

class Oneway extends Component {
  async componentDidMount() {
    await this.props.getTripAction();
  }


  render() {
    const { payload, spinner } = this.props.tripState.trips.tripRequests;

    return payload && payload.message ? (


      <Redirect to={`/requests/${payload.data.id}`} />
    ) : (
      <>
        { spinner ? (
          <Spinner />
        ) : (
          ''
        )}

        <OnewayView
          tripState={this.props.tripState}
          getTripAction={this.props.getTripAction}
          storeInputsAction={this.props.storeInputsAction}
          updateSpinnerStatus={this.props.updateSpinnerStatus}
        />
        <ToastContainer />
      </>

    );
  }
}

const mapStateToProps = (state) => ({
  tripState: state,
});
const mapDispatchToProps = {
  getTripAction,
  storeInputsAction,
  onewayAction,
  updateSpinnerStatus,

};

export default connect(mapStateToProps, mapDispatchToProps)(Oneway);
