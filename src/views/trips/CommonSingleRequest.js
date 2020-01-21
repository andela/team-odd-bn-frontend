import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { plusDivs } from '../../helpers/carousel';
import Action from '../../components/Action';
import verifyToken from '../../helpers/verifyToken';

class RequestView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isApproved: false,
      isRejected: false,
    };

    // this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({
      isApproved: !value,
      isRejected: value,
    });
  }

  render() {
    const { isApproved, isRejected } = this.state;
    console.log('state', this.state);
    const {
      comments, trips, approveRequest, params,
    } = this.props;
    this.refs.trips && plusDivs(1, this.refs.trips.children);

    return (
      <>
        <div className="singleRequestHeader">
          { verifyToken(localStorage.getItem('token')).roleId === 6
            ? (
              <>
                <div>
                  <button
                    id="approve"
                    disabled={isApproved}
                    className="approve-button"
                    onClick={() => {
                      this.handleChange(false);
                      approveRequest(params.tripRequestId, 'status=accept');
                    }}
                    background="#34c6f3"
                    type="submit"
                    action="approve"
                  >
                    {isApproved ? 'Approved' : 'Approve'}
                  </button>

                </div>
                <div>
                  <button
                    id="reject"
                    disabled={isRejected}
                    className="reject-button"
                    onClick={() => {
                      this.handleChange(true);
                      approveRequest(params.tripRequestId, 'status=reject');
                    }}
                    background="#34c6f3"
                    type="submit"
                    action="approve"
                  >
                    {isRejected ? 'Rejected' : 'Reject'}
                  </button>
                </div>
              </>
            )
            : (
              <div><Action background="#34c6f3" url="#" action="edit" /></div>
            )}
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
                  </div>
                ))}
            <div className="corasselButtons">
              {verifyToken(localStorage.getItem('token')).roleId === 6 ? (
                <div>
                  <a className="back-button" href="/trips/approval">Back To Trips</a>
                </div>
              )
                : (
                  <div>
                    <a className="back-button" href="/requests">Back To Trips</a>

                  </div>
                )}
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
