import React, { Component } from 'react'
import {connect} from 'react-redux';
import StarRatings from 'react-star-ratings'
import Dashboard from '../Dashboard/sidebar/index'
import '../../assets/css/accommodation/allAccommodation.scss'
import roomBedIcon from '../../assets/images/room_bed/room-bed_32.png'
import roomMapIcon from '../../assets/images/room_map/map_32.png'
import likeIcon from '../../assets/images/like_icon/thumbs-up_32.png'
import disLikeIcon from '../../assets/images/dislike_icon/thumbs-down_32.png'
import findAverageRates from '../../helpers/averageRatings'
import { Paginate, PaginationStyle } from '../../helpers/Paginate'
import newAccommodation from '../../helpers/joinLikesAccomodation'
import PopUp from '../../components/PopUp'
import { fetchRequestsAction } from '../../redux/actions/tripsActions/fetchRequests'
import { likeAction, dislikeAction } from '../../redux/actions/likeAndDislikeAction';
import { viewActionAccommodation } from '../../redux/actions/allAccommodation';
import BookAccommodation from '../../views/accommodation/BookAccommodation'
import { Link } from 'react-router-dom'
import '../../assets/css/accommodation/allAccommodation.scss';
import { checkPrevilege } from '../../helpers/checkPrevilege';

export class viewAllAccomodation extends Component {
  async componentDidMount() {
    const { fetchRequestsAction } = this.props
    const {allAccomodation} = this.props.accommodation
   this.setState({allAccomodation})
    await fetchRequestsAction()
  }
  state = {
    currentIndex: 0,
     a: 1 ,
     likeInput: false,
     dislikeInput: false
  }

 handleClick = async(like, items) =>{ 

  const { likeAction,viewActionAccommodation, dislikeAction } = this.props;

  if(like === "true"){
  const passData =  await likeAction({like: true, id: items.id}) 
    const updateView = await viewActionAccommodation()
    return  { passData, updateView };
  } 
  else if(like === "false"){
    const passData = await dislikeAction( {dislike: true, id: items.id})
    const updateView =  await viewActionAccommodation();
    return  { passData, updateView };
  }
  return await viewActionAccommodation();
}
  render() {
    const {
      allAccomodation,
      allLikesDislakes,
      pageNo,
      itemsPerPage,
      changePageNo,
      display,
      popUpAction,
      updateBookAccommodationInput,
    } = this.props.accommodation    
    const totalAccommodation = newAccommodation(
      allAccomodation,
      allLikesDislakes
    )
    const chunkPages = Paginate(totalAccommodation, itemsPerPage)
    const pageData = { ...chunkPages }[pageNo]
    const averageRates = findAverageRates(pageData)

    this.refs.mytrips &&
      this.refs.mytrips.children.length > 0 &&
      PaginationStyle(this.refs.mytrips.children, pageNo)

    return (
      <Dashboard>
        <PopUp
          popUp={<BookAccommodation id={23} commentId={3} />}
          display={display.bookAccommodation}
        />
        <div className="accommodation-container">
          {
            checkPrevilege(4) && (
              <div className="add_new_accommodation">
                <Link to="/accommodation/create">New accommodation</Link>
              </div>
            )
          }
          <div className="accomodation-title">
            Barefoot accomodations
          </div>

          {pageData && pageData.length !== 0 && pageData.map((items, index) => (
            <div key={index} className="accommodation-data">
              <div className="accommodation-right-side">
              <Link className="accommodation-item-container" to={`accommodation/${items.id}`}>
                <img src={items.imagesAccommodation[0].imageUrl} alt="accomodation" />
              </Link>
              </div>
              <div className="accommodation-left-side">
                <h2 className="accomodation-content-title">{items.name}</h2>
                <div className="accomodation-content">
                  <div className="accomodation-content-side-a">
                    <section className="common-content">
                      <img src={roomBedIcon} alt="rooom icon" />
                      <span>
                        {items.accommodationRooms.length}
                        {' '}
available rooms
                      </span>
                    </section>
                    <section className="common-content">
                      <img src={roomMapIcon} alt="map icon" />
                      <span>{items.address}</span>
                    </section>
                    <section className="common-content like-dislike">
                      <div className="like-dislike-content">
                        <img onClick={() => this.handleClick('true', items)} className="likes_icon_img"  src={likeIcon} alt="like icon" />
                      </div>
                      <div className="like-dislike-content">
                        <img onClick={() => this.handleClick('false', items)} className="dislike_icon" src={disLikeIcon} alt="dislike icon" />
                      </div>
                    </section>
                    <section className="common-content likes_dislikes_data">
                      <span className="likes_side">{items.LikesDislikes.likeCounter}</span>
                      <span className="dislikes_side">{items.LikesDislikes.dislikeCounter}</span>
                    </section>
                  </div>
                  <div className="accomodation-content-side-b">
                    <section className="rate-content">
                      <p className="average-rate">{averageRates[index] === 0 ? 0 : averageRates[index].toFixed(1)}</p>
                      <main>
                        <StarRatings
                          rating={averageRates[index]}
                          starRatedColor="#33c6f3"
                          starDimension="20px"
                          starSpacing="1px"
                        />
                      </main>
                    </section>
                    <p className="all-reviewes">
                      {items.ratings.length}
                      {' '}
reviews
                    </p>
                    <button
                        id="showBookingPopUp"
                        onClick={async () => {
                          await updateBookAccommodationInput({
                            accommodationId: items.id,
                            city:items.city.city
                          })
                          popUpAction({
                            currentPopUp: 'bookAccommodation',
                            bookAccommodation: 'flex',
                          })
                        }}
                        className="check-in"
                        type="button"
                      >
                        Check-in
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          <div className="corasselButtons">
            <div className="pageArrows">
              <button
                type="button"
                onClick={() => changePageNo(pageNo - 1 < 0 ? 0 : pageNo - 1)}
              >
                <a href={`#${pageNo - 1}`}> &#60;&#60;</a>
              </button>
            </div>
            <div className="pageButtons" ref="mytrips">
              {chunkPages.map((item, index) => (
                <div key={index} id={`${index}`}>
                  <button
                    type="button"
                    onClick={() => {
                      const c = this.state.currentIndex > index ? -1 : 1
                      this.setState({
                        currentIndex: index,
                        a: c,
                      })
                      changePageNo(index)
                    }}
                  >
                    <a href={`#${index + this.state.a}`}>{index + 1}</a>
                  </button>
                </div>
              ))}
            </div>
            <div className="pageArrows">
              <button
                type="button"
                onClick={() =>
                  changePageNo(
                    pageNo === chunkPages.length - 1 ? pageNo : pageNo + 1
                  )
                }
              >
                <a href={`#${pageNo}`}> &#62;&#62;</a>
              </button>
            </div>
          </div>
        </div>
      </Dashboard>
    )
  }
}

export const mapStateToProps = ({userLikesAndDislike}) => ({
  likeDislikeState:userLikesAndDislike,
});

export default connect(mapStateToProps, { likeAction,viewActionAccommodation, dislikeAction, fetchRequestsAction })(viewAllAccomodation);
