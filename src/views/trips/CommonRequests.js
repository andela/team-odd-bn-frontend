import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import {
  changePageNo,
  changeItemsPerPage,
} from '../../redux/actions/PaginationAction'
import { PaginationStyle } from '../../helpers/Paginate'

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
      userSearch
    } = this.props

    this.refs.mytrips &&
      this.refs.mytrips.children.length > 0 &&
      PaginationStyle(this.refs.mytrips.children, pageNo)

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

        {entities &&
          entities.map((entity, index) => (
            <div key={index} className="entity">
              {entity.map(i => (
                <div key={i.key} className={i.className}>
                  {i.attribute}
                </div>
              ))}
            </div>
          ))}
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
        <div className="corasselButtons">
          <div className="pageArrows">
            <button
              type="button"
              id='page1'
              onClick={() =>
                changePageNo(pageNo - 1 < 0 ? 0 : pageNo - 1)
              }
            >
              <a href={`#${pageNo - 1}`}> &#60;&#60;</a>
            </button>
          </div>
          <div className="pageButtons" ref="mytrips">
            {data &&
              data.map((item, index) => (
                <div id={`${index}`}>
                  <button
                  id='page2'
                    key={index}
                    type="button"
                    onClick={() => {
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
            id='page3'
              type="button"
              onClick={() =>
                changePageNo(pageNo === data.length - 1 ? pageNo : pageNo + 1)
              }
            >
              <a href={`#${pageNo}`}> &#62;&#62;</a>
            </button>
          </div>
        </div>
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
