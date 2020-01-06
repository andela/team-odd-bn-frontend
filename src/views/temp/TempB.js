import React from 'react';
import Sidebar from '../Dashboard/sidebar/index';

const TempBContent = () => (
  <>
    <p>I am right side content B</p>
  </>
);


const TempA = () => (
  <>
    <Sidebar>
      <TempBContent />
    </Sidebar>
  </>
);

export default TempA;
