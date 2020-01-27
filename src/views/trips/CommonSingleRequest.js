
/* eslint-disable no-unused-expressions */

import React, { Component } from 'react'
import { plusDivs } from '../../helpers/carousel'
import Action from '../../components/Action'
import { Redirect } from 'react-router-dom';
import verifyToken from '../../helpers/verifyToken';
import trashIcon from '../../assets/images/trash.png'


class RequestView extends Component {
  state = {
    ds: 'none',
    commentId: '',
    tripRId: '',
    isApproved: false,
      isRejected: false,
  }
  componentDidMount() {
    this.refs.trips && plusDivs(1, this.refs.trips.children)
    this.scrollToBottom()
  }

  componentDidUpdate() {
    this.scrollToBottom()
  }

  scrollToBottom() {
    const scrollHeight = this.messagesEnd && this.messagesEnd.scrollHeight
    const height = this.messagesEnd && this.messagesEnd.clientHeight
    const maxScrollTop = scrollHeight - height
    this.messagesEnd
      ? (this.messagesEnd.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0)
      : ''
  }
  handleChange(value) {
    this.setState({
      isApproved: !value,
      isRejected: value,
    });
  }

  render() {
    const { isApproved, isRejected } = this.state;
    const {
      approveRequest, params,
      comments,
      trips,
      postCommentsAction,
      updateCommentInputAction,
      input,
      tripRequestId,
      deleteCommentAction,
      fetchRequestCommentsAction,
    } = this.props
    const inputValue = input ? input.comment : ''

    return (
      <>
        <div
          className="confirmPopup"
          style={{
            display: this.state.ds,
          }}
        >
          <div className="popupContainer">
            <div className="popupMessage">Are you sure you want to delete?</div>
            <div className="popupButtons">
              <div>
                <button
                  onClick={async () => {
                    await deleteCommentAction(this.state.commentId)
                    await fetchRequestCommentsAction(this.state.tripRId)
                    this.setState({
                      ds: 'none',
                    })
                  }}
                  id="delete"
                >
                  delete
                </button>
              </div>
              <div>
                <button
                  id="cancel"
                  onClick={async () => {
                    this.setState({
                      ds: 'none',
                    })
                  }}
                >
                  cancel
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="singleRequestHeader">
          {verifyToken(localStorage.getItem('token')).roleId === 6 &&
          verifyToken(localStorage.getItem('token')).id !==
            this.props.trips.userId ? (
            <>
              <div>
                <button
                  id="approve"
                  disabled={isApproved}
                  className="approve-button"
                  onClick={() => {
                    this.handleChange(false)
                    approveRequest(params.tripRequestId, 'status=accept')
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
                    this.handleChange(true)
                    approveRequest(params.tripRequestId, 'status=reject')
                  }}
                  background="#34c6f3"
                  type="submit"
                  action="approve"
                >
                  {isRejected ? 'Rejected' : 'Reject'}
                </button>
              </div>
            </>
          ) : (
            <div>
              <Action background="#34c6f3" url="#" action="edit" />
            </div>
          )}
        </div>
        <div className="singleRequest">
          <div className="trips" ref="trips">
            <div>
              <h3>Trip Details</h3>
            </div>
            {trips &&
              trips.trips &&
              trips.trips.map((trip, index) => (
                <div className="trip" key={index} ref={index => index}>
                  <div className="originId">{trip.originId}</div>
                  <div className="destinationId">{trip.destinationId}</div>
                  <div className="startDate">{trip.startDate.slice(0, 10)}</div>
                  <div className="returnDate">
                    {trip.returnDate === null
                      ? null
                      : trip.returnDate.slice(0, 10)}
                  </div>
                  <div className="reason">{trip.reason}</div>
                </div>
              ))}
            <div className="corasselButtons">
              {verifyToken(localStorage.getItem('token')).roleId === 6 &&
              verifyToken(localStorage.getItem('token')).id !==
                this.props.trips.userId ? (
                <div>
                  <a className="back-button" href="/trips/approval">
                    Back To Trips
                  </a>
                </div>
              ) : (
                <div>
                  <a className="back-button" href="/requests">
                    Back To Trips
                  </a>
                </div>
              )}
              <div>
                <button
                  id="back"
                  type="button"
                  onClick={() => plusDivs(-1, this.refs.trips.children)}
                >
                  &nbsp;
                </button>
              </div>
              <div>
                <button
                  id="front"
                  type="button"
                  onClick={() => plusDivs(1, this.refs.trips.children)}
                >
                  &nbsp;
                </button>
              </div>
            </div>
          </div>
          <div className="comments">
            <div>
              <h3>Comments</h3>
            </div>
            <div
              ref={el => {
                this.messagesEnd = el
              }}
              className="chats"
            >
              {comments &&
                comments.map((comment, index) => (
                  <div className="commentCardContainer" key={index}>
                    <img
                      alt="deleteCommentButton"
                      src={comment.user.userProfile.imageURL}
                      className="commentProfileImg"
                    />
                    <div className="commentCardHeader">
                      <div className="commenter">{comment.user.firstName}</div>
                      <div className="commentText">{comment.comment}</div>
                      <div className="commentDate">
                        {comment.updatedAt.slice(0, 10)}
                      </div>
                    </div>

                    <div className="commentCardHeaderRigthSide">
                      <button
                        id="deleteComment"
                        onClick={async () => {
                          this.setState({
                            commentId: comment.id,
                            tripRId: tripRequestId,
                            ds: 'flex',
                          })
                        }}
                        type="button"
                      >
                        <img title="Delete comment" alt="deleteCommentButton" src={trashIcon} />
                      </button>
                    </div>
                  </div>
                ))}
            </div>
            <div className="commentInputField">
              <label>Add New Comment:</label>
              <textarea
                value={inputValue}
                onChange={e =>
                  updateCommentInputAction({ comment: e.target.value })
                }
                placeholder="Comment"
              />
            </div>
            <div className="singleRequestFooter">
              <button
                type="button"
                onClick={async () => {
                  updateCommentInputAction({ comment: '' })
                  await postCommentsAction(tripRequestId, input)
                  await fetchRequestCommentsAction(tripRequestId)
                }}
              >
                post
              </button>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default RequestView
