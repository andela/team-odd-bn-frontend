import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../assets/css/accommodation/viewSpeciAccommodation.scss';
import singleAccommodation from '../../redux/actions/singleAccommodation';
import PopUp from '../../components/PopUp';
import AccommodationMap from './AccommodationMap';
import popUpAction from '../../redux/actions/popUpAction';

export class ViewSpecificAccommodation extends Component {
  render() {
    const { accommodationItem, popUpAction,display } = this.props;
    return (
      <>
        <PopUp display={display.map} popUp={<AccommodationMap />} />
        <div className="accommodation-title">
          <h1>Accommodation details</h1>
        </div>
        <div className="accommodation-container-details">
          <div className="accommodation-details-data">
            <div className="main-accommodation-image">
              <img src={accommodationItem.imagesAccommodation[0].imageUrl} alt="main accommodation" />
            </div>
            <div className="main-accommodation-details">
              <h2 className="main-accommodation-details-title">{ accommodationItem.name }</h2>
              <section className="common-section city-section">
                <p className="common-section-name label-accommodation-details">City: </p>
                <p className="accommodation-details-single-data">{ accommodationItem.address }</p>
              </section>
              <section className="common-section room-section">
                <p className="common-section-name label-accommodation-details">Rooms: </p>
                <p className="accommodation-details-single-data">
                  { accommodationItem.accommodationRooms.length }
                  types of rooms
                </p>
              </section>
              <section className="common-section description-section">
                <p className="common-section-name label-accommodation-details">Description: </p>
                <p className="accommodation-details-single-data description-section-text">
                  { accommodationItem.description }
                </p>
              </section>
              <section className="common-section created-section">
                <p className="common-section-name label-accommodation-details">Opened at: </p>
                <p className="accommodation-details-single-data">
                  { new Date().toDateString(accommodationItem.createdAt) }
                </p>
              </section>
              <section className="common-section coordinates-section">
                <button
                  className="visit-map-button"
                  onClick={() => popUpAction({
                    map: 'flex',
                    currentPopUp: 'map',
                  })}
                  type="button"
                >
                  View on map
                </button>
              </section>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export const mapStateToProps = (state) => ({
  accommodationItem: state.specificAccommodation.singleAccommodation[0],
  display: state.popUpsDisplay,
});

export const mapDispatchToprops = {
  singleAccommodation,
  popUpAction,
};

export default connect(mapStateToProps, mapDispatchToprops)(ViewSpecificAccommodation);
