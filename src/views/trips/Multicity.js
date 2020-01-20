import React, { Component } from 'react';
import '../../assets/css/roundtrip.scss';
import '../../assets/css/base.scss';
import '../../assets/css/multicity.scss';
import { checkCurrentDate } from '../../components/trips/DateFields';

export class MulticityTripView extends Component {
  render() {
    const {
      cities, tripIndex, removeTrip, onHandleInputChange, data, itemRequests,
    } = this.props.tripAction;

    return (
      <>
        <div className="multicity-default-trip">
          <div className="select-origin">
            <div className="trip-label">
              City
            </div>
            <div className="select-trip-origin">
              <select
                value={itemRequests.originId}
                name="originId"
                required
                onChange={(e) => onHandleInputChange(e, tripIndex)}
              >
                <option value="" disabled>
                  Choose origin
                </option>
                { cities && cities.data.map((item, index) => (
                  <option value={item.id} key={index}>{item.city}</option>
                ))}
              </select>

              <select
                value={itemRequests.destinationId}
                name="destinationId"
                required
                onChange={(e) => onHandleInputChange(e, tripIndex)}
              >
                <option value="" disabled>
                    Choose destination
                </option>
                { cities && cities.data.map((item, index) => (
                  <option value={item.id} key={index}>{item.city}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="trip-reason">
            <div className="trip-label">
              Reason
            </div>
            <div className="multicity-trip-reason">
              <textarea
                value={itemRequests.reason}
                name="reason"
                minLength="5"
                required
                placeholder="Reason for trip request"
                onChange={(e) => onHandleInputChange(e, tripIndex)}
              />
            </div>
          </div>

          <div className="multicity-trip-date">
            <div className="trip-label">
              Start date
            </div>
            <div className="multicity-date">
              <input
                type="date"
                required
                id="start"
                name="startDate"
                value={itemRequests.startDate}
                min={checkCurrentDate()}
                onChange={(e) => onHandleInputChange(e, tripIndex)}
              />
            </div>
            <div className="trip-label">
              End date
            </div>
            <div className="multicity-date">
              <input
                type="date"
                required
                id="start"
                name="returnDate"
                value={itemRequests.returnDate}
                min={checkCurrentDate()}
                onChange={(e) => onHandleInputChange(e, tripIndex)}
              />
            </div>
          </div>
        </div>
        <div className="multicity-button">
          { data.length !== 1 && <button onClick={() => removeTrip(tripIndex)} className="add-trip remove-trip-btn" type="button">Remove trip</button> }
        </div>
      </>
    );
  }
}

export default MulticityTripView;
