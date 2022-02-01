import React, { useState } from 'react';
import {
  SelectContainer, SelectCamera, Datebtn, SolInput, MinMax, EarthDate,
} from '../../styles/selection.style';
import { CuriosityArray } from '../elements/CamArrays';
import 'react-datepicker/dist/react-datepicker.css';
import { Container } from '../../styles/styles.style';

const Curiosity = () => {
  const [camera, setCamera] = useState('');
  const [currentDate, setCurrentDate] = useState('sol');
  const [earth, setEarth] = useState(new Date());
  const [sol, setSol] = useState(1800);

  const getOppositeDate = () => ((currentDate === 'sol') ? 'earth' : 'sol');

  const handleChangeCamera = (e) => {
    setCamera(e.target.value);
  };

  const handleChangeSol = (e) => {
    setSol(e.target.value);
  };
  const handleChangeEarth = (e) => {
    setEarth(e);
  };

  const landingDate = new Date('2012-08-06');
  const today = (new Date());
  const DifferenceInTime = today.getTime() - landingDate.getTime();
  const DifferenceInDays = Math.round(DifferenceInTime / (1000 * 3600 * 24) - 95);

  return (
    <Container>
      <SelectContainer>
        <h2>Curiosity</h2>
        <SelectCamera value={camera} onChange={handleChangeCamera}>
          {CuriosityArray.map((e) => (
            <option value={e.value} key={e.id}>{e.content}</option>
          ))}
        </SelectCamera>
        <Datebtn onClick={() => setCurrentDate(getOppositeDate())}>
          <h1>
            {(currentDate === 'sol') ? 'Sol Date' : 'Earth Date' }
          </h1>
        </Datebtn>
        {(currentDate === 'sol')
          ? (
            <div>
              <SolInput type="range" min={0} max={DifferenceInDays} value={sol} onChange={handleChangeSol} />
              <MinMax>
                <p>0</p>
                <p>{sol}</p>
                <p>{DifferenceInDays}</p>
              </MinMax>
            </div>
          )
          : <EarthDate selected={earth} onChange={handleChangeEarth} dateFormat="yyyy/MM/dd" />}
      </SelectContainer>
    </Container>
  );
};

export default Curiosity;
