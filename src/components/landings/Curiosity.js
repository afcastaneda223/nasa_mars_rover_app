import React from 'react';
import CuriosityCam from '../elements/CuriosityCam';
import SolDate from '../elements/SolDate';

const Curiosity = () => {
  const int = 3;
  return (
    <div>
      Curiosity
      {int}
      <CuriosityCam />
      <SolDate />
    </div>
  );
};

export default Curiosity;
