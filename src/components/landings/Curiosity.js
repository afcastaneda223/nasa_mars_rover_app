import React, { useState } from 'react';
import {
  SelectContainer, SelectCamera, Datebtn, SolInput, MinMax, EarthDate,
} from '../../styles/selection.style';
import { CuriosityArray } from '../elements/CamArrays';
import 'react-datepicker/dist/react-datepicker.css';
import { Container } from '../../styles/styles.style';

const Curiosity = () => {
  const landingDate = new Date('2012-08-06');
  const today = (new Date());
  const DifferenceInTime = today.getTime() - landingDate.getTime();
  const DifferenceInDays = Math.round(DifferenceInTime / (1000 * 3600 * 24) - 95);
  const [camera, setCamera] = useState('');
  const [currentDate, setCurrentDate] = useState('sol');
  const [earth, setEarth] = useState(new Date());
  const [sol, setSol] = useState(DifferenceInDays);
  const date = (currentDate === 'sol') ? `sol=${sol}` : `earth_date=${earth.toLocaleDateString('en-CA')}`;
  const currentCamera = (camera === '' ? '' : `&camera=${camera}`);
  const apikey = 'api_key=DEMO_KEY';
  const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?${currentCamera}&${date}&${apikey}`;

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

  return (
    <Container>
      <SelectContainer>
        <h1>Curiosity</h1>
        <SelectCamera value={camera} onChange={handleChangeCamera}>
          {CuriosityArray.map((e) => (
            <option value={e.value} key={e.id}>{e.content}</option>
          ))}
        </SelectCamera>
        <Datebtn onClick={() => setCurrentDate(getOppositeDate())}>
          {(currentDate === 'sol') ? 'Sol Date' : 'Earth Date' }
        </Datebtn>
        {(currentDate === 'sol')
          ? (
            <div>
              <SolInput type="range" min={0} max={DifferenceInDays} value={sol} onChange={handleChangeSol} />
              <MinMax>
                <h3>
                  Sol Date:
                  {' '}
                  {sol}
                </h3>
              </MinMax>
            </div>
          )
          : <EarthDate selected={earth} onChange={handleChangeEarth} dateFormat="yyyy/MM/dd" />}
        {url}
      </SelectContainer>
    </Container>
  );
};

export default Curiosity;
