import { useState } from 'react';
import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  SmallNavbarContainer,
  NavbarFullContainer,
  NavbarLinksContainer,
  NavbarLinks,
  SmallNavButton,
  SmallNavbarLinks,
} from '../styles/Navbar.styles';

const Navbar = () => {
  const [smallNavbar, setSmallNavbar] = useState(false);

  return (
    <NavbarContainer smallNavbar={smallNavbar}>
      <NavbarFullContainer>
        <LeftContainer>
          <i className="fas fa-globe-americas" />
          Nasa
        </LeftContainer>
        <RightContainer>
          <NavbarLinksContainer>
            <NavbarLinks to="/"><i className="fas fa-home" /></NavbarLinks>
            <NavbarLinks to="/curiosity">Curiosity</NavbarLinks>
            <NavbarLinks to="/opportunity">Opportunity</NavbarLinks>
            <NavbarLinks to="/spirit">Spirit</NavbarLinks>
            <SmallNavButton onClick={() => { setSmallNavbar((val) => !val); }}>{smallNavbar ? <i className="fas fa-times" /> : <i className="fas fa-bars" />}</SmallNavButton>
          </NavbarLinksContainer>
        </RightContainer>
      </NavbarFullContainer>
      { smallNavbar ? (
        <SmallNavbarContainer>
          <SmallNavbarLinks to="/"><i className="fas fa-home" /></SmallNavbarLinks>
          <SmallNavbarLinks to="/curiosity">Curiosity</SmallNavbarLinks>
          <SmallNavbarLinks to="/opportunity">Opportunity</SmallNavbarLinks>
          <SmallNavbarLinks to="/spirit">Spirit</SmallNavbarLinks>
        </SmallNavbarContainer>
      ) : <div /> }
    </NavbarContainer>
  );
};

export default Navbar;
