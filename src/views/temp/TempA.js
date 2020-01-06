import React from 'react';
import Dashboard from '../Dashboard/sidebar/index';

const TempAContent = () => (
  <>
    <p>I am right side  content A</p>
  </>
);


const TempA = () => (
  <>
    <Dashboard>
      <TempAContent />
    </Dashboard>
  </>
);

export default TempA;
