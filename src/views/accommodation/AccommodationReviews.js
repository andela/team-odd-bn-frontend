import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';
import { connect } from 'react-redux';

export class AccommodationReviews extends Component {
  render() {
    const { accommodationItem } = this.props;
    return (
      <>
        <div className="user-reviews-container">
          <div className="user-review-title">
            <h1>User reviews</h1>
          </div>
          {
            accommodationItem.ratings.length === 0 ? 'No reviews'
              : accommodationItem.ratings.map((rate, index) => (
                <div key={index} className="user-reviews-content">
                  <div className="user-review-profile">
                    <img src={`${rate.users.userProfile.imageURL}`} alt="reviewer profile" />
                  </div>
                  <div className="user-review-information">
                    <div className="user-review-name">
                      <h2>{`${rate.users.firstName} ${rate.users.lastName}`}</h2>
                    </div>
                    <div className="user-review-rate-time">
                      <StarRatings
                        rating={parseInt(rate.rating, 10)}
                        starRatedColor="#33c6f3"
                        starDimension="16px"
                        starSpacing="1px"
                      />
                      <p className="view-time-stamp">
                        {' '}
                        { new Date().toDateString(rate.createdAt) }
                      </p>
                    </div>
                    <div className="view-user-message">
                      <p>{rate.review}</p>
                    </div>
                  </div>
                </div>
              ))
          }
        </div>
      </>
    );
  }
}

export const mapStateToProps = (state) => ({
  accommodationItem: state.specificAccommodation.singleAccommodation[0],
});

export default connect(mapStateToProps, null)(AccommodationReviews);
