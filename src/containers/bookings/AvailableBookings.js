import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dashboard from '../../views/Dashboard/sidebar/index';
import RatesBookings from '../../views/bookings/RatesBookings';
import popUpAction from '../../redux/actions/popUpAction';
import PopUp from '../../components/PopUp';
import { onEditInputAction } from '../../redux/actions/ratingAction';

export class AvailableBookings extends Component {
  render() {
    const { popUpAction, display, onEditInputAction } = this.props;
    return (
      <Dashboard>
        <button
          type="button"
          className="form-btn-open"
          onClick={() => {
            popUpAction({
              currentPopUp: 'rate',
              rate: 'flex',
            });
            onEditInputAction({ accommodationId: Math.random(10, 100) });
          }}
        >
click me
        </button>
        <PopUp popUp={<RatesBookings />} display={display.rate} />
      </Dashboard>
    );
  }
}

export const mapStateToProps = (state) => ({
  display: state.popUpsDisplay,
});

export default connect(mapStateToProps, { popUpAction, onEditInputAction })(AvailableBookings);
