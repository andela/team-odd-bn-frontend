import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../assets/css/roundtrip.scss';
import { Redirect } from 'react-router';
import Submit from '../../components/SubmitButton';
import Dashboard from '../../views/Dashboard/sidebar/index';
import '../../assets/css/base.scss';
import TripType from '../../components/trips/TripTypes';
import TripHeader from '../../components/trips/TripHeader';
import createRoundTrip, { updateSpinnerStatus } from '../../redux/actions/roundTripActions';
import getCities from '../../redux/actions/getAllCitiesActions';

export class RoundTrip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      originId: '',
      destinationId: '',
      reason: '',
      startDate: '',
      returnDate: '',
      formErrors: {
        reason: '',
        startDate: '',
        returnDate: '',
      },
    };

    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    const { createRoundTrip, updateSpinnerStatus, getCities } = this.props;
    await updateSpinnerStatus();
    await getCities();
  }

  handleChangeInput(e) {
    const { name, value } = e.target;
    const formErrors = { ...this.state.formErrors };

    switch (name) {
      case 'reason':
        formErrors.reason = value.length < 3 ? 'Reason should be a minimum of 2 letters' : '';
        break;
      case 'startDate':
        const startDay = new Date(value);
        const today = new Date();
        formErrors.startDate = Number(startDay) <= Number(today) ? 'Start date should be a valid date after today(YY-MM-DD)' : '';
        break;
      case 'returnDate':
        const returnDay = new Date(value);
        const todayDate = new Date();
        formErrors.returnDate = Number(returnDay) <= Number(todayDate) ? 'Return date should be a valid date after today(YY-MM-DD)' : '';
        break;
      default:
        break;
    }
    this.setState({
      formErrors,
      [name]: value,
    });
  }

  async handleSubmit(e) {
    e.preventDefault();
    updateSpinnerStatus(true);

    const {
      originId,
      destinationId,
      reason,
      startDate,
      returnDate,
    } = this.state;

    const data = {
      originId: parseInt(originId, 10),
      destinationId: parseInt(destinationId, 10),
      reason,
      startDate,
      returnDate,
    };
    await this.props.createRoundTrip(data);
  }

  render() {
    const {
      spinner, roundTripMessage, roundTripError, cities,
    } = this.props;

    const {
      originId,
      destinationId,
      reason,
      startDate,
      returnDate,
      formErrors,
    } = this.state;

    return (

      <Dashboard>
        { roundTripMessage && <Redirect to="/requests" />}
        <div className="oneway-container">


          <TripHeader />
          <div className="trip-field-container">
            <TripType />
            <div className="trip-form">
              <form
                onSubmit={this.handleSubmit}
              >
                <div className="cityField">
                  <div className="cityLabel">
                    <label htmlFor="input">City</label>
                  </div>

                  <div className="originCity">
                    <select
                      data-test="originId"
                      placeholder="hhh"
                      onChange={this.handleChangeInput}
                      value={originId}
                      name="originId"
                    >
                      <option>Origin</option>
                      { cities && cities.data.map((item, index) => (
                        <option
                          key={index}
                          value={item.id}
                        >
                          {item.city}
                        </option>
                      )) }
                      {' '}
                    </select>
                  </div>

                  <div className="originCity">
                    <select
                      data-test="destinationId"
                      onChange={this.handleChangeInput}
                      value={destinationId}
                      name="destinationId"
                    >
                      <option>Destination</option>
                      { cities && cities.data.map((item, index) => (
                        <option
                          key={index}
                          value={item.id}
                        >
                          {item.city}
                        </option>
                      )) }
                    </select>
                  </div>
                </div>

                <div className="reasonField">
                  <label htmlFor="textArea">Reason</label>
                  <textarea
                    data-test="reason"
                    id="textArea"
                    cols="30"
                    rows="10"
                    onChange={this.handleChangeInput}
                    value={reason}
                    name="reason"
                    placeholder="Reason for trip request"
                  />
                  <br />
                  <div className="error">
                    {formErrors.reason.length > 3 && (
                      <span className="errorMessageInputs">{formErrors.reason}</span>
                    )}
                  </div>
                </div>

                <div className="dateField">
                  <div className="startingDate">
                    <label htmlFor="startDate">Start date</label>
                    <input
                      data-test="startDate"
                      type="date"
                      name=""
                      id="startDate"
                      onChange={this.handleChangeInput}
                      value={startDate}
                      name="startDate"
                    />
                    <br />
                    <div className="error">
                      {formErrors.startDate && (
                        <span className="errorMessageInputs">{formErrors.startDate}</span>
                      )}
                    </div>
                  </div>

                  <div className="returningDate">
                    <label htmlFor="startDate">Return date</label>
                    <input
                      data-test="returnDate"
                      type="date"
                      id="returnDate"
                      onChange={this.handleChangeInput}
                      value={returnDate}
                      name="returnDate"
                    />
                    <br />
                    <div className="error">
                      {formErrors.returnDate && (
                        <span className="errorMessageInputs">{formErrors.returnDate}</span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="btnField">
                  <Submit buttonName="Request trip" className="btn-submit" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </Dashboard>
    );
  }
}

export const mapStateToProps = (state) => ({
  roundTripMessage: state.trips.roundTrip.roundTripMessage,
  roundTripError: state.trips.roundTrip.roundTripError,
  spinner: state.trips.roundTrip.spinner,
  spinnerError: state.trips.roundTrip.spinnerError,
  cities: state.allCities.cities,
  citiesError: state.allCities.citiesError,

});

export default connect(mapStateToProps, { createRoundTrip, updateSpinnerStatus, getCities })(RoundTrip);
