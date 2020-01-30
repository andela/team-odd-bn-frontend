import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCitiesAction } from '../../redux/actions/createAccommodationActions';
import { openSingleBooking, getSingleBooking } from '../../redux/actions/bookings/viewSingleBookingActions';
import ViewSingleBooking from './viewSingleBooking';
import Dashboard from '../../views/Dashboard/sidebar/index';

export class AllBookings extends Component {
  componentDidMount() {
    this.props.getCitiesAction();
  }

  handleSubmit(e, id) {
    e.preventDefault();
    this.props.openSingleBooking(true);
    this.props.getSingleBooking(id);
  }


  render() {
    return (
      <Dashboard>
        <div className="tempStyle">
          {this.props.bookings.modal.openSingleBooking && <ViewSingleBooking />}
          <button
            data-test="view-single-booking"
            type="button"
            onClick={(e) => {
              this.handleSubmit(e, 1);
            }}
          >
            View
          </button>
        </div>
      </Dashboard>
    );
  }
}
export const mapStateToProps = (state) => ({
  bookings: state.bookings,
});
export default connect(mapStateToProps, { openSingleBooking, getSingleBooking, getCitiesAction })(AllBookings);
