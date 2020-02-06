import React, { Component } from 'react'
import '../../assets/css/modal.scss'
import { connect } from 'react-redux'
import SubmitButton from '../../components/SubmitButton'
import { openSingleBooking } from '../../redux/actions/bookings/viewSingleBookingActions'

import matchCitiesWithIds from '../../helpers/matchCitiesWithIds'

export class ViewSingleBooking extends Component {


  closeModal = props => {
    props.openSingleBooking(false)
    
  }
  render() {
    const { data, cities } = this.props;
    const userBooking = data && data.myBookingsresult[0];
    
    return (
      <div id="myModal" className="modal">
        <div className="modal-content modal-content-small">
          <span
            data-test="close-modal"
            role="button"
            tabIndex={0}
            className="close"
            onClick={() => {
              this.closeModal(this.props)
            }}
            onKeyDown={() => {
              this.closeModal(this.props)
            }}
          >
            &times;
          </span>
          <h2 id="modal-header" className="modal-header">
            Booking
          </h2>
          <div className="modal-body">
            <div className="center-element">
              <form
                data-test="close-modal-btn"
                onSubmit={() => {
                  this.closeModal(this.props)
                }}
              >
                <div className="modal-disabled-input">
                  <label>Accommodation</label>
                  <input
                    className="transparent-input"
                    type="text"
                    value={
                      (data && userBooking['room.accommodation.name']) || ''
                    }
                    disabled
                  />
                </div>
                <div className="modal-disabled-input">
                  <label>Address</label>
                  <input
                    className="transparent-input"
                    type="text"
                    value={
                      (data && userBooking['room.accommodation.address']) || ''
                    }
                    disabled
                  />
                </div>
                <div className="modal-disabled-input">
                  <label>Room type</label>
                  <input
                    className="transparent-input"
                    type="text"
                    value={(data && userBooking['room.roomType']) || ''}
                    disabled
                  />
                </div>
                <div className="modal-disabled-input">
                  <label>Room Name</label>
                  <input
                    className="transparent-input"
                    type="text"
                    value={(data && userBooking['room.name']) || ''}
                    disabled
                  />
                </div>
                <div className="modal-disabled-input">
                  <label>Check-in date</label>
                  <input
                    className="transparent-input"
                    type="text"
                    value={
                      (data && userBooking['checkInDate'].slice(0, 10)) || ''
                    }
                    disabled
                  />
                </div>
                <div className="modal-disabled-input">
                  <label>Check-out date</label>
                  <input
                    className="transparent-input"
                    type="text"
                    value={
                      (data && userBooking['checkOutDate'].slice(0, 10)) || ''
                    }
                    disabled
                  />
                </div>
                <SubmitButton buttonName="Close" className="btn-long" />
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export const mapStateToProps = state => {
  return {
    bookings: state.bookings,
    data: state.bookings.modal.payload && state.bookings.modal.payload.data,
    cities: state.accommodation.createAccommodation.retrievedCities.data
  }
}
  
export const mapDispatchToProps = {

};


export default connect(mapStateToProps, { openSingleBooking })(ViewSingleBooking)