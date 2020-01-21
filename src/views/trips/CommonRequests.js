import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class RequestView extends Component {
  render() {
    const { navs, tableHeads, entities } = this.props;
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
            No trip requests found click &nbsp;
            <Link to="/trips/roundtrip">here</Link>
            &nbsp; to create one
          </div>
        )}
      </>
    );
  }
}

export default RequestView;
