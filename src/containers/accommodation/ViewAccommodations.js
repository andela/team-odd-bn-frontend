import React, { Component } from 'react'
import { connect } from 'react-redux'
import ViewAccomodation from '../../views/accommodation/ViewAccomodation'
import { viewActionAccommodation,getAllLikesDislikes } from '../../redux/actions/allAccommodation';
import Spinner from '../../components/Spinner'
import { changePageNo } from '../../redux/actions/PaginationAction'
import popUpAction from '../../redux/actions/popUpAction';
import { fetchRequestsAction } from '../../redux/actions/tripsActions/fetchRequests';
import {  updateBookAccommodationInput } from '../../redux/actions/bookings/bookAnAccommodation';
import { getAllBookings } from '../../redux/actions/bookings/getAllBookingsActions';
export class ViewAccommodations extends Component {
  async componentDidMount() {
    const { viewActionAccommodation,fetchRequestsAction } = this.props
    viewActionAccommodation();
    await fetchRequestsAction()
  }

  accommodation = () => {
    const {
      allAccomodation,
      allLikesDislakes,
      itemsPerPage,
      pageNo,
      changePageNo,
      display,
      popUpAction,
      updateBookAccommodationInput,
      likeDislikeState
    } = this.props
    return {
      allAccomodation: allAccomodation,
      allLikesDislakes,
      itemsPerPage,
      pageNo,
      changePageNo,
      likeDislikeState, 
      display,
      popUpAction,
      updateBookAccommodationInput
    }
  }

  render() {
    const { allLikesDislakes } = this.props;
    return (
      <>
        {allLikesDislakes.length === 0 && <Spinner />}
        {allLikesDislakes.length !== 0 && (
          <ViewAccomodation accommodation={this.accommodation()} />
        )}
      </>
    )
  }
}

export const mapStateToProps = state => ({
  allAccomodation: state.allAccomodation.accommodations,
  errorAccomodation: state.allAccomodation.accommodationErrors,
  allLikesDislakes: state.allAccomodation.allLikes,
  pageNo: state.pagination.pageNo,
  itemsPerPage: state.pagination.itemsPerPage,
  display: state.popUpsDisplay,
  likeDislikeState: state.userLikesAndDislike
})

export default connect(mapStateToProps, {
  viewActionAccommodation,
  changePageNo,
  popUpAction,
  fetchRequestsAction,
  updateBookAccommodationInput
})(ViewAccommodations)
