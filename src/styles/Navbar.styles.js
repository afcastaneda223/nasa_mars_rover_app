import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavbarContainer = styled.nav`
    width: 100%;
    height: ${(props) => (props.smallNavbar ? '350px' : '80px')};
    background-color: #193D91;
    display: flex;
    flex-direction: column;
    color: #FFFFFF;
    text-decoration: none;
    font-size: x-large;
    font-weight: 700;
    padding: 0 20px 0 20px;
    letter-spacing: 0.05em;
    font-family: 'Bebas Neue', cursive;
    @media (min-width: 700px) {
      height: 80px;
    }
`;

const LeftContainer = styled.div`
    flex: 30%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    @media (max-width: 700px) {
        flex: 70%;
    }
`;

const RightContainer = styled.div`
    flex: 70%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    @media (max-width: 700px) {
        flex: 30%;
    }
`;

const NavbarFullContainer = styled.nav`
    height: 80px;
    display: flex;

`;

const NavbarLinksContainer = styled.nav`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: end;
    @media (max-width: 700px) {
      justify-content: end;
    }
`;

const NavbarLinks = styled(Link)`
    color: #FFFFFF;
    text-decoration: none;
    font-size: x-large;
    margin-left: 20px;
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
