import React from 'react';
import { NavbarContainer } from '../styles/Navbar.styles';

const Navbar = () => {
  const int = 3;
  return (
    <NavbarContainer>
      Navbar
      {int}
    </NavbarContainer>
  );
};

export default Navbar;
