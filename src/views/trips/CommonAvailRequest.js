import React, { Component } from 'react';
import { plusDivs } from '../../helpers/carousel';
import Action from '../../components/Action';

class RequestView extends Component {
  render() {
    const {
      comments, trips, approveRequest, params,
    } = this.props;
    this.refs.trips && plusDivs(1, this.refs.trips.children);
    // const url = `/trips/${tripRequestId}?status=approve`;
    // const url = `/trips/${tripRequestId}?status=approve`;
    return (
      <>
        <div className="singleRequestHeader">
          <div><button onClick={() => approveRequest(params.tripRequestId, 'status=accept')} background="#34c6f3" type="submit" action="approve">Approve</button></div>
        </div>
        <div className="singleRequest">
          <div className="trips" ref="trips">
            <div><h3>Trip Details</h3></div>
            {trips && trips.trips
                && trips.trips.map((trip, index) => (
                  <div className="trip" key={index} ref={(index) => index}>
                    <div className="originId">{trip.originId}</div>
                    <div className="destinationId">{trip.destinationId}</div>
                    <div className="startDate">{trip.startDate.slice(0, 10)}</div>
                    <div className="returnDate">{trip.returnDate === null ? null : trip.returnDate.slice(0, 10)}</div>
                    <div className="reason">{trip.reason}</div>
                    {/* <div className="tripType">{trip.tripType}</div> */}
                  </div>
                ))}
            <div className="corasselButtons">
              <div>
                <button id="back" type="button" onClick={() => plusDivs(-1, this.refs.trips.children)}>
              &nbsp;
                </button>

              </div>
              <div>
                <button id="front" type="button" onClick={() => plusDivs(1, this.refs.trips.children)}>
              &nbsp;
                </button>
              </div>
            </div>
          </div>
          <div className="comments">
            <div><h3>comments</h3></div>
            {comments && comments.map((comment, index) => (
              <div className="commentCardContainer" key={index}>
                <div className="commentCardHeader">
                  <div className="commentCardHeaderLeftSide">
                    {comment.user.firstName}
                  </div>
                  <div className="commentCardHeaderRigthSide">
                    {comment.updatedAt.slice(0, 10)}
                  </div>
                </div>
                <div className="commentBody" key={comment.key}>
                  {comment.comment}
                </div>
              </div>
            ))}
            <div className="commentCardContainer">
              <div className="commentCardHeader">
                <div className="commentCardHeaderLeftSide">
                    Comment
                </div>
                <div className="commentCardHeaderRigthSide" />
              </div>
              <div className="commentInputField">
                <textarea />
              </div>
            </div>
            <div className="singleRequestFooter">
              <button type="button">post</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default RequestView;
