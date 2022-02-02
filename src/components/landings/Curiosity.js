import React, { useState } from 'react';
import {
  SelectContainer, SelectCamera, Datebtn, SolInput, EarthDate,
} from '../../styles/selection.style';
import { CuriosityArray } from '../elements/CamArrays';
import 'react-datepicker/dist/react-datepicker.css';
import { Container } from '../../styles/styles.style';
import ApiCall from '../elements/ApiCall';
import {
  ImgContainer, ImgGrid, ImgCard, ImgPhoto,
} from '../../styles/images.style';

const Curiosity = () => {
  const landingDate = new Date('2012-08-06');
  const today = (new Date());
  const DifferenceInTime = today.getTime() - landingDate.getTime();
  const DifferenceInDays = Math.round(DifferenceInTime / (1000 * 3600 * 24) - 95);
  const [camera, setCamera] = useState('');
  const [currentDate, setCurrentDate] = useState('sol');
  const [earth, setEarth] = useState(new Date());
  const [sol, setSol] = useState(DifferenceInDays);
  const [pageNumber] = useState(1);
  const date = (currentDate === 'sol') ? `sol=${sol}` : `earth_date=${earth.toLocaleDateString('en-CA')}`;
  const currentCamera = (camera === '' ? '' : `&camera=${camera}`);
  const apikey = process.env.REACT_APP_NASA_API_KEY;
  const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?${currentCamera}&${date}&api_key=${apikey}`;
  const getOppositeDate = () => ((currentDate === 'sol') ? 'earth' : 'sol');

  const handleChangeCamera = (e) => {
    setCamera(e.target.value);
  };
  const handleChangeSol = (e) => {
    e.preventDefault();
    if (e.target.value < DifferenceInDays && e.target.value >= 0) {
      setSol(e.target.value);
    }
  };
  const handleChangeEarth = (e) => {
    setEarth(e);
  };
  const {
    photos,
    loading,
    error,
  } = ApiCall(pageNumber, url);

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
              <label htmlFor="solinput">
                <h3>
                  Sol Date (between 0 and
                  {' '}
                  {DifferenceInDays}
                  ):
                </h3>
              </label>
              <SolInput type="number" min={0} max={DifferenceInDays} value={sol} onChange={handleChangeSol} id="solinput" />
            </div>
          )
          : (
            <EarthDate
              selected={earth}
              onChange={handleChangeEarth}
              dateFormat="yyyy/MM/dd"
              minDate={new Date('2012-08-06')}
              maxDate={new Date()}
              popperPlacement="bottom"
            />
          )}
      </SelectContainer>
      <ImgContainer>
        <ImgGrid>
          {photos.map((photo) => (
            <ImgCard key={photo}>
              <ImgPhoto src={photo} alt="" className="" />
            </ImgCard>
          ))}
        </ImgGrid>
        <div>
          { loading && 'Loading...' }
        </div>
        <div>
          { error && 'Error' }
        </div>
      </ImgContainer>
    </Container>
  );
};

export default Curiosity;
