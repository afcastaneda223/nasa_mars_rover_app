import React, { useState } from 'react';

const SolDate = () => {
  const [sol, setSol] = useState(10);

  const handleChange = (e) => {
    setSol(e.target.value);
  };

  return (
    <div className="slidecontainer">
      <div>
        <input type="range" minValue={0} maxValue={100} value={sol} onChange={handleChange} />
        {sol}
      </div>
    </div>
  );
};

export default SolDate;
