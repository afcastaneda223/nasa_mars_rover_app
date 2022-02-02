import React from 'react';
import { Link } from 'react-router-dom';
import curiosity from '../assets/curiosity.jpeg';
import opportinity from '../assets/opportinity.jpeg';
import spirit from '../assets/spirit.jpeg';
import {
  ImgContainer, HomeGrid, ImgCard, ImgPhoto,
} from '../../styles/images.style';
import { Container } from '../../styles/styles.style';

const Home = () => {
  const int = 3;
  return (
    <Container>
      <ImgContainer>
        <HomeGrid>
          <ImgCard key={curiosity}>
            <Link to="/curiosity">
              <ImgPhoto src={curiosity} alt="" className="curiosity Rover" />
            </Link>
          </ImgCard>
          <ImgCard key={opportinity}>
            <Link to="/opportunity">
              <ImgPhoto src={opportinity} alt="" className="opportinity Rover" />
            </Link>
          </ImgCard>
          <ImgCard key={spirit}>
            <Link to="/spirit">
              <ImgPhoto src={spirit} alt="" className="opportinity Rover" id={int} />
            </Link>
          </ImgCard>
        </HomeGrid>
      </ImgContainer>
    </Container>
  );
};

export default Home;
