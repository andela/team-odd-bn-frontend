/* eslint-disable no-shadow */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import dotenv from 'dotenv';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import InputField from '../../components/InputField';
import { createAccommodationList } from '../../constants/accommodation';
import SubmitButton from '../../components/SubmitButton';
import Spinner from '../../components/Spinner';
import {
  updateSpinnerStatus,
  roomsModalAction,
  newAccommodationPhotos,
  newAccommodationInput,
  getCitiesAction,
  createAccommodationAction,
} from '../../redux/actions/createAccommodationActions';
import Modal from '../../components/modal';
import { cloudinaryWidget } from '../../helpers/cloudinaryWidget';

dotenv.config();
export class CreateAccommodation extends Component {
  componentDidMount() {
    const { getCitiesAction } = this.props;
    getCitiesAction();
  }

  addRooms() {
    const { roomsModalAction } = this.props;
    roomsModalAction(true);
  }

  uploadWidget(e) {
    const { newAccommodationPhotos } = this.props;
    e.preventDefault();
    cloudinaryWidget(newAccommodationPhotos);
  }

  handleSubmit(event) {
    const { createAccommodationAction } = this.props;
    const { stateObject, updateSpinnerStatus } = this.props;
    event.preventDefault();
    updateSpinnerStatus(true);
    const {
      rooms, photos: imageUrls, name, googleCoordinates, description, city, address,
    } = stateObject.accommodation.createAccommodation;
    const payload = {
      name, cityId: parseInt(city, 10), address, googleCoordinates, imageUrls, description, rooms,
    };
    createAccommodationAction(payload);
  }

  handleChange(e, className) {
    const { newAccommodationInput } = this.props;
    const singleInput = {};
    singleInput[className] = e.target.value;
    newAccommodationInput(singleInput);
  }

  render() {
    const { stateObject, newAccommodationInput } = this.props;
    const { retrievedCities } = stateObject.accommodation.createAccommodation;
    return (
      <div>
        {stateObject.accommodation.createAccommodation.payload && (<Redirect to="/dashboard" />)}
        {stateObject.accommodation.createAccommodation.spinner ? (<Spinner data-test="createAccommodation-spinner" />) : ('')}
        {stateObject.accommodation.createAccommodation.openRoomsModal ? (<Modal />) : ('')}
        <div className="center-container">
          <div className="page-header">
            <h3>Accommodation Info</h3>
          </div>
          <div className="accommodation-container">
            <div className="inputbox">
              <form data-test="createAccommodation-form" className="inputbox" onSubmit={this.handleSubmit.bind(this)}>
                <InputField data-test="name" handleChange={newAccommodationInput} inputList={createAccommodationList} />
                <div className="description">
                  <div>Description</div>
                  <textarea
                    data-test="accommodation-description"
                    required
                    onChange={(e) => {
                      this.handleChange(e, 'description');
                    }}
                  />
                </div>
                <div className="city">
                  <div>City</div>
                  <select
                    data-test="accommodation-city"
                    required
                    defaultValue=""
                    onChange={(e) => {
                      this.handleChange(e, 'city');
                    }}
                  >
                    <option value="" disabled> Select city </option>
                    {retrievedCities
                      && retrievedCities.data.map((city) => (
                        <option key={city.id} value={city.id}>
                          {city.city}
                        </option>
                      ))}
                  </select>
                </div>
                <div className="aligned-container">
                  <div className="upload-btn">
                    <div id="rooms" className="uploaded-rooms">
                      No rooms yet
                    </div>
                    <div>
                      <button data-test="addRooms-btn" type="button" onClick={this.addRooms.bind(this)}>Add rooms </button>

                      <div id="photos" className="uploaded-photos"> No photos yet </div>

                      <button data-test="addPhotos-btn" type="button" onClick={this.uploadWidget.bind(this)}>
                        Upload photos
                      </button>
                    </div>
                  </div>
                  <SubmitButton data-test="send-request-btn" buttonName="Create" className="btn-long" />
                </div>
              </form>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    );
  }
}
CreateAccommodation.propTypes = {
  updateSpinnerStatus: PropTypes.func,
  newAccommodationInput: PropTypes.func,
  createAccommodationAction: PropTypes.func,
  getCitiesAction: PropTypes.func,
  roomsModalAction: PropTypes.func,
  stateObject: PropTypes.instanceOf(Object),
};
CreateAccommodation.defaultProps = {
  updateSpinnerStatus: null,
  newAccommodationInput: null,
  createAccommodationAction: null,
  getCitiesAction: null,
  roomsModalAction: null,
  stateObject: null,
};
export const mapStateToProps = (state) => ({ stateObject: state });

export default connect(mapStateToProps, {
  updateSpinnerStatus,
  roomsModalAction,
  newAccommodationPhotos,
  newAccommodationInput,
  getCitiesAction,
  createAccommodationAction,
})(CreateAccommodation);
