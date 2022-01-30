import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavbarContainer = styled.nav`
    width: 100%;
    height: ${(props) => (props.smallNavbar ? '50%' : '100%')};
    background-color: #193D91;
    display: flex;
    flex-direction: column;
    color: #FFFFFF;
    text-decoration: none;
    font-size: x-large;
    font-weight: 700;
    @media (min-width: 700px) {
      height: 100px;
    }
`;

const LeftContainer = styled.div`
    flex: 20%;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 20px;
`;

const RightContainer = styled.div`
    flex: 80%;
    display: flex;
    align-items: center;
`;

const NavbarFullContainer = styled.nav`
    width: 100%;
    height: 80px;
    display: flex;
    padding: 0px 20px 0 20px;

`;

const NavbarLinksContainer = styled.nav`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    margin: 0 20px 0 20px;
    @media (max-width: 700px) {
      justify-content: end;
    }
`;

const NavbarLinks = styled(Link)`
    color: #FFFFFF;
    text-decoration: none;
    font-size: x-large;
    font-family: 'Prata', serif;
    @media (max-width: 700px) {
    display: none;
    }
`;

const SmallNavButton = styled.button`
    background-color: none;
    background: none;
    color: #FFFFFF;
    font-size: x-large;
    border: none;
    cursor: pointer;
    @media (min-width: 700px) {
    display: none;
    }
`;

const SmallNavbarContainer = styled.nav`
    display: flex;
    flex-direction: column;
    @media (min-width: 700px) {
    display: none;
    }
`;

const SmallNavbarLinks = styled(Link)`
    color: #FFFFFF;
    width: 100%;
    height: 100%;
    border-top: 1px solid #FFFFFF;
    padding: 15px;
    text-decoration: none;
    text-align: center;
    font-size: x-large;
    font-family: 'Prata', serif;
    @media (min-width: 700px) {
    display: none;
    }
`;

export {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarFullContainer,
  SmallNavbarContainer,
  NavbarLinksContainer,
  NavbarLinks,
  SmallNavButton,
  SmallNavbarLinks,
};
