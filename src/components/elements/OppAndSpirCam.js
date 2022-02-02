import React, { useState } from 'react';
import { OppAndSpirArray } from './CamArrays';

const OppAndSpirCam = () => {
  const camArray = OppAndSpirArray;

  const [camera, setCamera] = useState('');

  const handleChange = (e) => {
    setCamera(e.target.value);
  };

  return (
    <div>
      <select value={camera} onChange={handleChange}>
        {camArray.map((e) => (
          <option value={e.value} key={e.id}>{e.content}</option>
        ))}
      </select>
      <p>{`You selected ${camera}`}</p>
    </div>
  );
};

export default OppAndSpirCam;
