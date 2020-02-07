import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../assets/css/table.scss';
import { Redirect } from 'react-router-dom';
import {
  editRequestAction,
  paginationAction,
  editTripsAction,
} from '../../redux/actions/tripsActions/fetchRequests';
import popUpAction from '../../redux/actions/popUpAction';
import { getTripAction } from '../../redux/actions/tripsActions/onewayActions';
import { changePageNo } from '../../redux/actions/PaginationAction';
import { viewActionAccommodation } from '../../redux/actions/allAccommodation';
import { bookAccommodationAction, updateBookAccommodationInput } from '../../redux/actions/bookings/bookAnAccommodation';
import bookingInputFields from '../../constants/bookings';

class BookAccommodation extends Component {
  constructor() {
    super();
    this.inputF = (inputield, label) => (
      <div key={label} className="inputFieldsContainer">
        <div className="labelSide">{label}</div>
        <div className="inputSide">
          {inputield}
        </div>
      </div>
    );
  }


  async componentDidMount() {
    const { viewActionAccommodation, getTripAction } = this.props;
    await getTripAction();
    await viewActionAccommodation();
  }

  render() {
    const handleBooking = async () => {
      this.props.popUpAction({
        currentPopUp: 'bookAccommodation',
        bookAccommodation: 'none',
      });
      await this.props.bookAccommodationAction(this.props.bookAccommodation.bookAccommodationInput);
      changeBookings(true);
    };

    const {
      accomodations,
      bookAccommodation,
      updateBookAccommodationInput,
      popUpAction,
      bookings,
      changeBookings,
    } = this.props;
    const {
      bookAccommodationInput,
      bookAccommodationData,
    } = bookAccommodation;
    const {
      accommodationId, roomType, roomId,
    } = bookAccommodationInput;
    const rooms = accomodations
      && [].concat(...accomodations.map((request) => request.accommodationRooms));
    const curentAccommodationRoomTypes = rooms.filter(
      (room) => room.accommodationId === accommodationId,
    );
    const allAvaillableRoomTypes = curentAccommodationRoomTypes.map(
      (room) => room.roomType.toLowerCase(),
    );
    const availlableRoomTypes = allAvaillableRoomTypes.filter(
      (type, index) => allAvaillableRoomTypes.indexOf(type) === index,
    );
    const availlableRooms = rooms.filter(
      (room) => room.roomType.toLowerCase()
       === roomType
        && room.accommodationId === accommodationId,
    );
    const bookingInputList = bookingInputFields(
      availlableRoomTypes,
      accommodationId,
      availlableRooms,
      roomId,
      updateBookAccommodationInput,
      roomType,
    );
    return bookAccommodationData && bookings ? (
      <Redirect to="/bookings" />
    ) : (
      <div className="bookingAccommodationPopupContainer">
        <div className="saveEditedRequests">
          <button
            type="button"
            id="cancel"
            onClick={() => {
              popUpAction({
                currentPopUp: 'bookAccommodation',
                bookAccommodation: 'none',
              });
            }}
          >
            &times;
          </button>
        </div>
        <div className="bookingHeaderContainer">
          <div>Accommodation Booking</div>
        </div>
        {bookingInputList.map((item) => this.inputF(item.inputField, item.label))}
        <div className="saveEditedRequests">
          <button type="button" id="save" onClick={handleBooking}>
            Book now!
          </button>
        </div>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  cities: state.trips.tripRequests.getCity,
  accomodations: state.allAccomodation.accommodations,
  bookAccommodation: state.bookings.bookAccommodation,
});
const actions = {
  paginationAction,
  popUpAction,
  editTripsAction,
  getTripAction,
  editRequestAction,
  changePageNo,
  viewActionAccommodation,
  bookAccommodationAction,
  updateBookAccommodationInput,
};

export default connect(mapStateToProps, actions)(BookAccommodation);
