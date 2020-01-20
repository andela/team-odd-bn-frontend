import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class RequestView extends Component {
  render() {
    const {
      data,
      navs,
      tableHeads,
      entities,
      paginationEnd,
      paginationStart,
      paginatedRequest,
      paginationAction,
    } = this.props;

    return (
      <>

        {navs && (
          <div className="tableNav">
            {navs.map((head) => (
              <div className={head.className} key={head.key}>
                {head.attribute}
              </div>
            ))}
          </div>
        )}
        {tableHeads && (
          <div className="tableHead">
            {tableHeads.map((head) => (
              <div key={head.key}>{head.attribute}</div>
            ))}
          </div>
        )}

        {entities
          && entities.map((entity, index) => (
            <div key={index} className="entity">
              {entity.map((i) => (
                <div key={i.key} className={i.className}>
                  {i.attribute}
                </div>
              ))}
            </div>
          ))}
        {entities.length == 0 && (
          <div className="itemsNotFound">
            No trips found click &nbsp;
            <Link to="/trips/oneWay">here</Link>
            &nbsp; to request a new one
          </div>
        )}
        <div className="corasselButtons">
          <div>
            <button
              id="back"
              type="button"
              onClick={() => paginationAction({
                data,
                currentPage: data.slice(paginationStart, paginationEnd),
                paginationStart: paginationStart - 5,
                paginationEnd: paginationEnd - 5,
              })}
            />
          </div>
          <div>
            <button
              id="front"
              type="button"
              onClick={() => paginationAction({
                data,
                currentPage: data.slice(paginationStart, paginationEnd),
                paginationStart: paginationStart + 5,
                paginationEnd: paginationEnd + 5,
              })}
            />
          </div>

        </div>
      </>
    );
  }
}

export default RequestView;
