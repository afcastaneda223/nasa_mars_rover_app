import React, { useState } from 'react';
import {
  SelectContainer, SelectCamera, Datebtn, SolInput, EarthDate, NextContainer, NextBtn,
} from '../../styles/selection.style';
import { OppAndSpirArray } from '../elements/CamArrays';
import 'react-datepicker/dist/react-datepicker.css';
import { Container } from '../../styles/styles.style';
import ApiCall from '../elements/ApiCall';
import {
  ImgContainer, ImgGrid, ImgCard, ImgPhoto,
} from '../../styles/images.style';

const Spirit = () => {
  const [camera, setCamera] = useState('');
  const [currentDate, setCurrentDate] = useState('sol');
  const [earth, setEarth] = useState(new Date('2010-03-21'));
  const [sol, setSol] = useState(2208);
  const [pageNumber, setPageNumber] = useState(1);
  const date = (currentDate === 'sol') ? `sol=${sol}` : `earth_date=${earth.toLocaleDateString('en-CA')}`;
  const currentCamera = (camera === '' ? '' : `&camera=${camera}`);
  const apikey = process.env.REACT_APP_NASA_API_KEY;
  const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?${currentCamera}&page=${pageNumber}&${date}&api_key=${apikey}`;
  const getOppositeDate = () => ((currentDate === 'sol') ? 'earth' : 'sol');

  const handleChangeCamera = (e) => {
    setCamera(e.target.value);
    setPageNumber(1);
  };
  const handleChangeSol = (e) => {
    e.preventDefault();
    if (e.target.value < 2208 && e.target.value >= 1) {
      setSol(e.target.value);
      setPageNumber(1);
    }
  };
  const handleChangeEarth = (e) => {
    setEarth(e);
    setPageNumber(1);
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
          {OppAndSpirArray.map((e) => (
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
                  Sol Date (between 1 and
                  {' '}
                  {2208}
                  ):
                </h3>
              </label>
              <SolInput type="number" min={1} max={2208} value={sol} onChange={handleChangeSol} id="solinput" />
            </div>
          )
          : (
            <EarthDate
              selected={earth}
              onChange={handleChangeEarth}
              dateFormat="yyyy/MM/dd"
              minDate={new Date('2004-01-05')}
              maxDate={new Date('2010-03-21')}
              popperPlacement="bottom"
            />
          )}
        <NextContainer>
          {(pageNumber >= 2)
      && (
      <NextBtn onClick={() => setPageNumber(pageNumber - 1)}>
        Back
      </NextBtn>
      ) }
          {(photos.length === 25 && pageNumber >= 1)
      && (
      <NextBtn onClick={() => setPageNumber(pageNumber + 1)}>
        Next
      </NextBtn>
      ) }
        </NextContainer>
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
          { loading && <h3>Loading...</h3> }
        </div>
        <div>
          { error && <h3>Error</h3> }
        </div>
      </ImgContainer>
      <NextContainer>
        {(pageNumber >= 2)
      && (
      <NextBtn onClick={() => setPageNumber(pageNumber - 1)}>
        Back
      </NextBtn>
      ) }
        {(photos.length === 25 && pageNumber >= 1)
      && (
      <NextBtn onClick={() => setPageNumber(pageNumber + 1)}>
        Next
      </NextBtn>
      ) }
      </NextContainer>
    </Container>
  );
};

export default Spirit;
