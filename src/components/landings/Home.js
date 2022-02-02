import React from 'react';
import { Link } from 'react-router-dom';
import curiosity from '../assets/curiosity.jpeg';
import opportinity from '../assets/opportinity.jpeg';
import spirit from '../assets/spirit.jpeg';
import {
  ImgContainer, HomeGrid, HomeCard, HomePhoto, ImgText,
} from '../../styles/images.style';
import { Container } from '../../styles/styles.style';

const Home = () => {
  const int = 3;
  return (
    <Container>
      <ImgContainer>
        <HomeGrid>
          <HomeCard key={curiosity}>
            <ImgText>Curiosity</ImgText>
            <Link to="/curiosity">
              <HomePhoto src={curiosity} alt="" className="curiosity Rover" />
            </Link>
          </HomeCard>
          <HomeCard key={opportinity}>
            <ImgText>Opportinity</ImgText>
            <Link to="/opportunity">
              <HomePhoto src={opportinity} alt="" className="opportinity Rover" />
            </Link>
          </HomeCard>
          <HomeCard key={spirit}>
            <ImgText>Spirit</ImgText>
            <Link to="/spirit">
              <HomePhoto src={spirit} alt="" className="opportinity Rover" id={int} />
            </Link>
          </HomeCard>
        </HomeGrid>
      </ImgContainer>
    </Container>
  );
};

export default Home;
