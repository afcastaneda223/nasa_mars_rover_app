import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavbarContainer = styled.nav`
    width: 100%;
    height: 80px;
    background-color: #193D91;
    display: flex;
    flex-direction: column;
    color: #FFFFFF;
    text-decoration: none;
    font-size: x-large;
`;

const LeftContainer = styled.div`
    flex: 20%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border: 2px solid red;
`;

const RightContainer = styled.div`
    flex: 80%;
    display: flex;
    align-items: center;
    border: 2px solid red;

`;

const NavbarFullContainer = styled.nav`
    width: 100%;
    height: 80px;
    display: flex;
`;

const NavbarSmallContainer = styled.nav`
`;

const NavbarLinksContainer = styled.nav`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    margin: 0 20px 0 20px;
`;

const NavbarLinks = styled(Link)`
    color: #FFFFFF;
    text-decoration: none;
    font-size: x-large;
    font-family: 'Prata', serif;
`;

export {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarFullContainer,
  NavbarSmallContainer,
  NavbarLinksContainer,
  NavbarLinks,
};
