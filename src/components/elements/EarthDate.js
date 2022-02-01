import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const EarthDate = () => {
  const [earth, setEarth] = useState(new Date());

  const handleChangeEarth = (e) => {
    setEarth(e);
  };

  return (
    <div>
      <DatePicker selected={earth} onChange={handleChangeEarth} dateFormat="yyyy/MM/dd" />
      {earth.toLocaleDateString('en-CA')}
    </div>
  );
};

export default EarthDate;
