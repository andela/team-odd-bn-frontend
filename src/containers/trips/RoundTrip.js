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
import SelectCities from '../../components/trips/SelectCities';
import DateFields from '../../components/trips/DateFields';
import selectInputs from '../../constants/selectCities';
import {
  getTripAction,
} from '../../redux/actions/tripsActions/onewayActions';
import DateFieldInput from '../../constants/DateFieldInput';

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
    const { createRoundTrip, updateSpinnerStatus, getTripAction } = this.props;
    await updateSpinnerStatus();
    await getTripAction();
  }

  handleChangeInput = data => {
    this.setState({ ...data, data })
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
      startDate: startDate,
      returnDate: returnDate,
    };
    await this.props.createRoundTrip(data);
  }

  render() {
    const {
      spinner, roundTripMessage, roundTripError, cities, tripState,
    } = this.props;

    const {
      reason,
    } = this.state;

    const data = tripState.trips.tripRequests.getCity;    
    return (

      <Dashboard>
        { roundTripMessage && <Redirect to={`/requests/`} />}
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
                  <SelectCities handleChange={this.handleChangeInput} inputName={selectInputs} myData={data} />
                </div>

                <div className="reasonField">
                  <label htmlFor="textArea">Reason</label>
                  <textarea
                    data_test="reason"
                    id="textArea"
                    cols="30"
                    rows="10"
                    onChange={e => this.handleChangeInput({reason: e.target.value})}
                    value={reason}
                    required
                    min='3'
                    name="reason"
                    placeholder="Reason for trip request"
                  />
                </div>

                <div className="dateField">
                  <DateFields dateFieldName={DateFieldInput}  handleChange={this.handleChangeInput}/>
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
  tripState: state,
  roundTripMessage: state.trips.roundTrip.roundTripMessage,
  roundTripError: state.trips.roundTrip.roundTripError,
  spinner: state.trips.roundTrip.spinner,
  spinnerError: state.trips.roundTrip.spinnerError,
  cities: state.allCities.cities,
  citiesError: state.allCities.citiesError,

});

export default connect(mapStateToProps, { createRoundTrip, updateSpinnerStatus, getTripAction })(RoundTrip);
