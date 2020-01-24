import React, { Component } from 'react';
import { connect } from 'react-redux';
import ViewAccomodation from '../../views/accommodation/ViewAccomodation';
import { viewActionAccommodation } from '../../redux/actions/allAccommodation';
import '../../components/Spinner';
import Spinner from '../../components/Spinner';
import {changePageNo} from  '../../redux/actions/PaginateAction'
export class ViewAccommodations extends Component {
  componentDidMount() {
    const { viewActionAccommodation } = this.props;
    viewActionAccommodation();
  }

  accommodation = () => {
    const { allAccomodation, allLikesDislakes,itemsPerPage, pageNo, changePageNo } = this.props;    
    return {
      allAccomodation: allAccomodation,
      allLikesDislakes,
      itemsPerPage,
      pageNo,
      changePageNo
    }
  }

  render() {
    const { allLikesDislakes } = this.props;
    return (
      <>
        { allLikesDislakes.length === 0 && <Spinner/> }
        { allLikesDislakes.length !== 0 && <ViewAccomodation accommodation={this.accommodation()} /> }
      </>
    );
  }
}

export const mapStateToProps = (state) => ({
  allAccomodation: state.allAccomodation.accommodations,
  errorAccomodation: state.allAccomodation.accommodationErrors,
  allLikesDislakes: state.allAccomodation.allLikes,
  pageNo:state.pagination.pageNo,
  itemsPerPage:state.pagination.itemsPerPage
});

export default connect(mapStateToProps, { viewActionAccommodation,changePageNo })(ViewAccommodations);
