import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Dashboard from '../../views/Dashboard/sidebar';
import { getAllBookings } from '../../redux/actions/bookings/getAllBookingsActions';
import { Paginate } from '../../helpers/Paginate';
import { changePageNo } from '../../redux/actions/PaginationAction';
import '../../assets/css/bookings/userBookings.scss';
import icon1 from '../../assets/images/ViewAllBookings/icon1.png';
import icon2 from '../../assets/images/ViewAllBookings/icon2.png';
import icon3 from '../../assets/images/ViewAllBookings/icon3.png';
import icon4 from '../../assets/images/ViewAllBookings/icon4.png';
import { likeAction, dislikeAction } from '../../redux/actions/likeAndDislikeAction';
import { viewActionAccommodation } from '../../redux/actions/allAccommodation';
import likeIcon from '../../assets/images/like_icon/thumbs-up_32.png';
import disLikeIcon from '../../assets/images/dislike_icon/thumbs-down_32.png';
import joinLikesAccomodation from '../../helpers/joinLikesAccomodation'
import { getCitiesAction } from '../../redux/actions/createAccommodationActions';
import { openSingleBooking, getSingleBooking } from '../../redux/actions/bookings/viewSingleBookingActions';
import ViewSingleBooking from '../../containers/bookings/viewSingleBooking';
import { onEditInputAction } from '../../redux/actions/ratingAction'
import popUpAction from '../../redux/actions/popUpAction';
import PopUp from '../../components/PopUp';
import RatesBookings from '../../views/bookings/RatesBookings';

export class ViewBookings extends Component {

  state = {
    modal: false,
    index: null,
  }
  async componentDidMount() {    
    this.props.getCitiesAction();
    const { viewActionAccommodation } = this.props;
    viewActionAccommodation();
    await this.props.getAllBookings();
    const { allAccomodation } = this.props.accommodation;
    this.setState({ allAccomodation });
  }
  
  handleSubmit  = (e, id, index) => {  
    e.preventDefault();
    this.setState(prevState=>(
      {
        modal: !prevState.modal,
        index
      }
    ))
    this.props.openSingleBooking(true);
    this.props.getSingleBooking(id.id);
  }

  handleClick = async(like, item) =>{       
    const { likeAction,viewActionAccommodation, dislikeAction } = this.props;

    if(like === "true"){
    const passData =  await likeAction({like: true, id: item})
      const updateView = await viewActionAccommodation()
      return  { passData, updateView };
    }
    else if(like === "false"){
      const passData = await dislikeAction( {dislike: true, id: item})
      const updateView =  await viewActionAccommodation();
      return  { passData, updateView };
    }
    return await viewActionAccommodation();
  }

  render() {
  
    const {
      allBookings, pageNo, itemsPerPage, changePageNo, allAccomodation, popUpAction, display, onEditInputAction
    } = this.props;
    const { accommodations, allLikes } = allAccomodation;

    allLikes.map((like, index) => Object.assign(accommodations[index], like));
    
    const accommodationsData = allBookings ? allBookings.data.myBookingsresult.map(item=>item):[];
    
    joinLikesAccomodation(accommodations,allLikes).map((item)=>{
      accommodationsData.forEach(element => {
        if(item.id === element.room.accommodationId){
          Object.assign(element,item)
        }
      });
    })
  
    const chunkBookings = Paginate(accommodationsData, itemsPerPage);
    const bookingsPages = { ...chunkBookings };
    const currentPage = bookingsPages[pageNo];
    

    return (
      <Dashboard>
        <div className="userBookingContainer">
        <div className="userBookingsHeader">
          <div className="bookingTitle">Bookings</div>
        </div>
        {
          this.props.allBookings
          ?

          <div className="userBookingsContainer">
          {this.state.modal 
          && <ViewSingleBooking
           handleUpdateModal={(item) => this.setState({ modal: !item, })} 
            myIndex={this.state.index}
             modal={this.state.modal}/>}
            {currentPage
              && currentPage.map((booking, index) => (
                <div key={index} className="singleBooking">
                  <div className="bookingImage"    
                  onClick={(e) => {
                  this.handleSubmit(e, booking, index);
                }}
              >
                    <img src={booking.room.accommodation.imagesAccommodation[0].imageUrl} />
                  </div>
                  <div className="bookingDetails">
                    <div className="bookingHeader">{booking.room.accommodation.name}</div>
                    <div className="checkInBookings">
                      <img src={icon2} alt="icon1" />
                      <p>
  Check-in date:
                        {booking.checkInDate.slice(0, 10)}
                      </p>
                    </div>
                    <div className="checkOutBookings">
                      <img src={icon1} alt="icon2" />
                      <p>
  Check-out date:
                        {booking.checkOutDate.slice(0, 10)}
                      </p>
                    </div>
                    <div className="roomBookings">
                      <img src={icon3} alt="icon3" />
                      <p>
                        {`${booking.room.roomType} | ${booking.room.name}`}
                      </p>
                    </div>
                    <div className="cityBooking">
                      <img src={icon4} alt="icon4" />
                      <p>
                        {booking.room.accommodation.city.city}
                      </p>
                    </div>
  
  
                    <div className="booking-like-contents">  
                      <section className="common-content like-dislikes">
                        <div className="like-dislike-contents like-container">
                          <img onClick={() => {
                            const item = booking.room.accommodationId;
  
                            return this.handleClick('true', item)
                            }
                          } 
                            className="likes_icon_img" src={likeIcon} alt="like icon" 
                          />
                        </div>
                        <div className="like-dislike-contents dislike-container">
                          <img onClick={() => {
                            const item = booking.room.accommodationId;
                            this.handleClick('false', item)}} 
                            className="dislike_icon" src={disLikeIcon} alt="dislike icon" 
                          />
                        </div>
                      </section>
                      <section className="common-content likes_dislikes_data">
                        <span className="likes_side">{booking.likeCounter}</span>
                        <span className="dislikes_side">{booking.dislikeCounter}</span>
                      </section>
  
                      <div className="rateBookingsBtn">
                      <button className="rateBookingBtn"
                          type="button"
                          className="form-btn-open"
                          onClick={() => {
                            popUpAction({
                              currentPopUp: 'rate',
                              rate: 'flex',
                            });
                            onEditInputAction({ accommodationId: booking.id });
                          }}
                      >Rate</button>
                    </div>
                    </div>
  
    
                    <div className="createdOnBooking">
                      <p>
  Request Date:
                        {booking.createdAt.slice(0, 10)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            <div className="userBookingsFooter">
              <div className="pagination">
                <div className="pageArrows">
                  <button
                    onClick={() => changePageNo(pageNo - 1 < 0 ? 0 : pageNo - 1)}
                    type="button"
                  >
                <a href={`#${pageNo - 1}`}> &#60;&#60;</a>
                  </button>
                </div>
                <div className="pages">
                  {chunkBookings.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => changePageNo(index)}
                      type="button"
                    >
                      {index}
                    </button>
                  ))}
                </div>
                <div className="pageArrows">
                  <button
                    onClick={() => changePageNo(
                      pageNo === chunkBookings.length - 1 ? pageNo : pageNo + 1,
                    )}
                    type="button"
                  >
                 <a href={`#${pageNo}`}> &#62;&#62;</a>
                  </button>
                </div>
              </div>
            </div>
          </div>

          :
            <div className="empty-bookings-container">
              <p className="error-message-booking">
                You do not have bookings click 
                <Link to="/accommodations"> here </Link>
                to book new one
              </p>
            </div>
        }

        <PopUp popUp={<RatesBookings />} display={display.rate} />
        </div>
      </Dashboard>
    );
  }
}
export const mapStateToProps = (state, { userLikesAndDislike }) => ({
  allBookings: state.bookings.bookings.allBookings,
  pageNo: state.pagination.pageNo,
  itemsPerPage: state.pagination.itemsPerPage,
  likeDislikeState: userLikesAndDislike,
  allAccomodation: state.allAccomodation,
  bookings: state.bookings,
  display: state.popUpsDisplay,
});

export default connect(mapStateToProps, {
  getAllBookings, changePageNo, viewActionAccommodation, likeAction, 
  dislikeAction, openSingleBooking, getSingleBooking, getCitiesAction, 
  popUpAction, onEditInputAction
})(
  ViewBookings,
);
