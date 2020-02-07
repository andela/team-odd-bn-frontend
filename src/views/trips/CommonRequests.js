import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import {
  changePageNo,
  changeItemsPerPage,
} from '../../redux/actions/PaginationAction'
import { PaginationStyle } from '../../helpers/Paginate'
import Pagination from 'custom_react_pages';
import prev from '../../assets/images/prev_icon.png';
import next from '../../assets/images/next_icon.png'

class RequestView extends Component {
  state = {
    currentIndex: 0,
    a: 1,
  }
  render() {
    const {
      data,
      navs,
      tableHeads,
      entities,
      changePageNo,
      changeItemsPerPage,
      pageNo,
      userSearch,
    } = this.props


    return (
      <>
        {navs && (
          <div className="tableNav">
            {navs.map(head => (
              <div className={head.className} key={head.key}>
                {head.attribute}
              </div>
            ))}
          </div>
        )}
        {tableHeads && (
          <>
            {userSearch}
            <div className="tableHead">
              {tableHeads.map(head => (
                <div key={head.key}>{head.attribute}</div>
              ))}
            </div>
          </>
        )}
        {entities.length > 0 && (
          <Pagination
            itemsPerPage={6}
            next={<img src={next} />}
            prev={<img src={prev} />}
            data={entities ? entities : []}
            oneItem={item => (
              <div className="entity">
                {item.map(i => (
                  <div key={i.key} className={i.className}>
                    {i.attribute}
                  </div>
                ))}
              </div>
            )}
          />
        )}
        {entities.length == 0 && tableHeads[0].attribute === 'First name' && (
          <div className="itemsNotFound">User not found! </div>
        )}
        {entities.length == 0 && tableHeads[0].attribute !== 'First name' && (
          <div className="itemsNotFound">
            No trips found click &nbsp;
            <Link to="/trips/oneWay">here</Link>
            &nbsp; to request a new one
          </div>
        )}
      </>
    )
  }
}
export const mapStateToProps = state => ({
  requestsData: state.trips.requests.requestsData,
  pageNo: state.pagination.pageNo,
  itemsPerPage: state.pagination.itemsPerPage,
})
const actions = {
  changePageNo,
  changeItemsPerPage,
}

export default connect(mapStateToProps, actions)(RequestView)
