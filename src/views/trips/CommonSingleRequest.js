/* eslint-disable no-unused-expressions */

import React, { Component } from 'react'
import { plusDivs } from '../../helpers/carousel'
import verifyToken from '../../helpers/verifyToken'
import trashIcon from '../../assets/images/trash.png'
import PopUp from '../../components/PopUp'
import popUpAction from '../../redux/actions/popUpAction'
import { connect } from 'react-redux'
import { Paginate } from '../../helpers/Paginate'
import { changePageNo } from '../../redux/actions/PaginationAction'
import DeleteComment from './DeleteComment'
import EditTrip from './EditTrip'
import matchCitiesWithIds from '../../helpers/matchCitiesWithIds'
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
    })
  }

  render() {
    const { isApproved, isRejected } = this.state
    const {
      approveRequest,
      params,
      comments,
      singleRequestData,
      postCommentsAction,
      updateCommentInputAction,
      input,
      tripRequestId,
      deleteCommentAction,
      fetchRequestCommentsAction,
      pageNo,
      itemsPerPage,
      changePageNo,
      display,
      currentPopUp,
      popUpAction,
      cities,
    } = this.props
    const trips = singleRequestData.data

    const inputValue = input ? input.comment : ''
    const tripChunks = trips && Paginate(trips.trips, 1)
    const paginatedTrips = { ...tripChunks }
    const currentPage = paginatedTrips[pageNo]

    return (
      <>
        <PopUp
          popUp={
            <DeleteComment
              id={tripRequestId}
              commentId={this.state.commentId}
            />
          }
          display={display.deleteComment}
        />
        <PopUp
          popUp={<EditTrip id={tripRequestId} />}
          display={display.editTrip}
        />
        <div className="singleRequestHeader">
          {trips &&
          verifyToken(localStorage.getItem('token')).roleId === 6 &&
          verifyToken(localStorage.getItem('token')).id !== trips.userId ? (
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
            <div className="actionButton">
              <button
                id="edit"
                className="edit-button"
                onClick={() => {
                  this.props.popUpAction({
                    currentPopUp: 'editTrip',
                    editTrip: 'flex',
                  })
                }}
                background="#34c6f3"
              >
                edit
              </button>
            </div>
          )}
        </div>
        <div className="singleRequest">
          <div className="trips" ref="trips">
            <div>
              <h3>Trip Details</h3>
            </div>
            {currentPage &&
              currentPage.map((trip, index) => (
                <div className="trip" key={index} ref={index => index}>
                  {trips &&
                  verifyToken(localStorage.getItem('token')).roleId === 6 &&
                  verifyToken(localStorage.getItem('token')).id !==
                    trips.userId ? (
                    <>
                      <div className="Firstname">
                        {trips && trips.user.firstName}
                      </div>
                      <div className="Lastname">
                        {trips && trips.user.lastName}
                      </div>
                    </>
                  ) : (
                    ''
                  )}
                  <div className="originId">
                    {matchCitiesWithIds(trip.destinationId, cities).length >
                      0 && matchCitiesWithIds(trip.originId, cities)[0].city}
                  </div>
                  <div className="destinationId">
                    {matchCitiesWithIds(trip.destinationId, cities).length >
                      0 &&
                      matchCitiesWithIds(trip.destinationId, cities)[0].city}
                  </div>
                  <div className="tripType">
                    {trips && trips.tripType.tripType}
                  </div>
                  <div className="startDate">
                    {trips && trip.startDate.slice(0, 10)}
                  </div>
                  <div className="returnDate">
                    {trip.returnDate === null
                      ? null
                      : trip.returnDate.slice(0, 10)}
                  </div>
                  <div className="reason">{trip.reason}</div>
                  <div className="status">{trips && trips.status.status}</div>
                </div>
              ))}
            <div className="tripFooter">
              {trips &&
              verifyToken(localStorage.getItem('token')).roleId === 6 &&
              verifyToken(localStorage.getItem('token')).id !== trips.userId ? (
                <div className="backToTrips">
                  <a className="back-button" href="/trips/approval">
                    Back To Trips
                  </a>
                </div>
              ) : (
                <div className="backToTrips">
                  <a className="back-button" href="/requests">
                    Back To Trips
                  </a>
                </div>
              )}
              <div className="corasselButtons">
                <div className="pageArrows">
                  <button
                    type="button"
                    id="page1S"
                    onClick={() =>
                      changePageNo(pageNo - 1 < 0 ? 0 : pageNo - 1)
                    }
                  >
                    <a href={`#${pageNo - 1}`}> &#60;&#60;</a>
                  </button>
                </div>
                <div className="pageButtons">
                  {tripChunks &&
                    tripChunks.map((trip, index) => (
                      <div className="" key={index}>
                        <button
                          type="button"
                          id="page2S"
                          onClick={() => changePageNo(index)}
                        >
                          {index}
                        </button>
                      </div>
                    ))}
                </div>
                <div className="pageArrows">
                  <button
                    type="button"
                    id="page3S"
                    onClick={() =>
                      changePageNo(
                        pageNo === tripChunks.length - 1 ? pageNo : pageNo + 1
                      )
                    }
                  >
                    <a href={`#${pageNo}`}> &#62;&#62;</a>
                  </button>
                </div>
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
                          this.props.popUpAction({
                            currentPopUp: 'deleteComment',
                            deleteComment: 'flex',
                          })
                          this.setState({
                            commentId: comment.id,
                          })
                        }}
                        type="button"
                      >
                        <img
                          title="Delete comment"
                          alt="deleteCommentButton"
                          src={trashIcon}
                        />
                      </button>
                    </div>
                  </div>
                ))}
            </div>
            <div className="commentInputField">
              <label>Add New Comment:</label>
              <textarea
                id="postComment"
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
                id="submitComment"
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
export const mapStateToProps = state => ({
  pageNo: state.pagination.pageNo,
  display: state.popUpsDisplay,
  itemsPerPage: state.pagination.itemsPerPage,
  singleRequestData: state.trips.requests.singleRequestData,
  cities: state.trips.tripRequests.getCity,
})
const actions = {
  popUpAction,
  changePageNo,
}

export default connect(mapStateToProps, actions)(RequestView)
