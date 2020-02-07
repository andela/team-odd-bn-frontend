/* eslint-disable react/button-has-type */
import React, { Component } from 'react';
import Rating from 'react-rating';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { onEditInputAction, submitRatingAction } from '../../redux/actions/ratingAction';
import '../../assets/css/ratesBookings.scss';
import starRateIconEmpty from '../../assets/images/star_rate/star-rate_32.png';
import starRateIconFull from '../../assets/images/star_rate/full_star_32.png';
import popUpAction from '../../redux/actions/popUpAction';
import validateFeedback from '../../helpers/validateFeedback';


export class RatesBookings extends Component {
  onSubmitRating = (e) => {
    e.preventDefault();
    const { submitRatingAction, ratings } = this.props;
    submitRatingAction(ratings);
  }

  render() {
    const { onEditInputAction, popUpAction, ratings } = this.props;

    if (ratings.submitSucces) {
      popUpAction({ currentPopUp: 'rate', rate: 'none', });
      ratings.submitSucces = undefined;
     <Redirect to='/bookings' />
    }
    return (
      <div className="rates-container">
        <div className="rate-title">
          <h1>Review</h1>
        </div>
        <div className="rate-content-data">
          <div className="rate-label">
            Review
          </div>
          <div className="rate-feedback-data">
            <form onSubmit={this.onSubmitRating}>
              <div className="rate-message">
                <textarea
                  onChange={(e) => {
                    onEditInputAction({ feedbackInput: e.target.value });
                  }}
                  name="feedbackInput"
                  required
                  minLength="3"
                  value={ratings.feedbackInput}
                  placeholder="Tell others what you think of your stay  here? would you recommend it and why?"
                  className="rate-message-box"
                  id="rate-message-box"
                />
              </div>
              <div className="rate-count-star">
                <p className="rating-common-word">Very Bad</p>
                <Rating
                  emptySymbol={<img src={starRateIconEmpty} className="icon" alt="Empty icon" />}
                  fullSymbol={<img src={starRateIconFull} className="icon" alt="full icon" />}
                  onChange={(e) => {
                    onEditInputAction({ starRateInput: e });
                  }}
                  initialRating={ ratings.starRateInput }
                  className="rating-no"
                />
                <p className="rating-common-word">Very Good</p>
              </div>
              <div className="rate-feedback-btn">
                <button
                  className="rate-common-btn rate-common-btn-cancel"
                  onClick={() => {
                    popUpAction({
                      currentPopUp: 'rate',
                      rate: 'none',
                    });
                  }}
                  type="reset"
                  value="Reset"
                >
close
                </button>
                <button
                  className="rate-common-btn rate-common-btn-submit"
                  type="submit"
                  disabled={validateFeedback(ratings.feedbackInput).disable}
                  style={{ backgroundColor: validateFeedback(ratings.feedbackInput).color }}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  ratings: state.ratings.RatesAccommodation,
});

export const mapDispatchToProps = {
  onEditInputAction,
  popUpAction,
  submitRatingAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(RatesBookings);
