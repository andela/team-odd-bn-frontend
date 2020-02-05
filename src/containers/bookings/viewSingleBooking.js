import React, { Component } from 'react'
import '../../assets/css/modal.scss'
import { connect } from 'react-redux'
import SubmitButton from '../../components/SubmitButton'
import { openSingleBooking } from '../../redux/actions/bookings/viewSingleBookingActions'

import matchCitiesWithIds from '../../helpers/matchCitiesWithIds'

export class ViewSingleBooking extends Component {

  state={
    modall: true
  }

  handleSubmit  = (e, id, index) => {     
    e.preventDefault();
    this.setState(prevState=>(
      {
        modall: !prevState.modall,
        index
      }
    ))
    this.props.openSingleBooking(true);
  }
  closeModal = props => {
    props.openSingleBooking(false)
  }
  render() {
    
    const {modal, allBookings,handleUpdateModal } = this.props;

    const userBooking = allBookings && allBookings.data.myBookingsresult[this.props.myIndex];
    
    return (
      <>
{    this.state.modall &&  <div id="myModal" className="modal">
        <div className="modal-content modal-content-small">
          <span
            data-test="close-modal"
            role="button"
            tabIndex={0}
            className="close"
            onClick={() =>handleUpdateModal(modal)}
         
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
                onSubmit={() =>handleUpdateModal(modal)}
              >
                <div className="modal-disabled-input">
                  <label>Accommodation</label>
                  <input
                    className="transparent-input"
                    type="text"
                    value={
                      (userBooking && userBooking.room.accommodation.name) || ''
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
                      (userBooking && userBooking.room.accommodation.address) || ''
                    }
                    disabled
                  />
                </div>
                <div className="modal-disabled-input">
                  <label>Room type</label>
                  <input
                    className="transparent-input"
                    type="text"
                    value={(userBooking && userBooking.room.roomType) || ''}
                    disabled
                  />
                </div>
                <div className="modal-disabled-input">
                  <label>Room Name</label>
                  <input
                    className="transparent-input"
                    type="text"
                    value={(userBooking && userBooking.room.name) || ''}
                    disabled
                  />
                </div>
                <div className="modal-disabled-input">
                  <label>Check-in date</label>
                  <input
                    className="transparent-input"
                    type="text"
                    value={
                      (userBooking && userBooking.checkInDate.slice(0, 10)) || ''
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
                      (userBooking && userBooking.checkOutDate.slice(0, 10)) || ''
                    }
                    disabled
                  />
                </div>
                <SubmitButton buttonName="Close" className="btn-long" />
              </form>
            </div>
          </div>
        </div>
      </div>}
      </>
    )
  }
}

export const mapStateToProps = state => {
  return {
    bookings: state.bookings,
    data: state.bookings.modal.payload && state.bookings.modal.payload.data,
    cities: state.accommodation.createAccommodation.retrievedCities.data,
    allBookings: state.bookings.bookings.allBookings,
  }
}
  
export const mapDispatchToProps = {
  
};


export default connect(mapStateToProps, { openSingleBooking })(ViewSingleBooking)