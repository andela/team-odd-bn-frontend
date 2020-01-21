import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../../../components/footer';

// eslint-disable-next-line react/prefer-stateless-function
export const RightSide = (props) => {
  const { RightSideContent } = props;
  return (
    <>
      <div className="right-side">
        {RightSideContent}
        <Footer />
      </div>
    </>
  );
};

export default RightSide;
