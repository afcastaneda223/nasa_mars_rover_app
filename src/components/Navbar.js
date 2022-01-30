import React from 'react';
import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarSmallContainer,
  NavbarFullContainer,
  NavbarLinksContainer,
  NavbarLinks,
} from '../styles/Navbar.styles';

const Navbar = () => {
  const int = 3;
  return (
    <NavbarContainer>
      <NavbarFullContainer>
        <LeftContainer>
          <i className="fas fa-globe-americas" />
          {int}
        </LeftContainer>
        <RightContainer>
          <NavbarLinksContainer>
            <NavbarLinks to="/">Home</NavbarLinks>
            <NavbarLinks to="/curiosity">Curiosity</NavbarLinks>
            <NavbarLinks to="/opportunity">Opportunity</NavbarLinks>
            <NavbarLinks to="/spirit">Spirit</NavbarLinks>
          </NavbarLinksContainer>
        </RightContainer>
      </NavbarFullContainer>
      <NavbarSmallContainer>
        small
      </NavbarSmallContainer>
    </NavbarContainer>
  );
};

export default Navbar;
