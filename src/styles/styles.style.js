import styled from 'styled-components';
import img from '../components/assets/img.png';

const Container = styled.div`
    min-width: 100%;
    height: 100%;
    min-height: 100vh;
    width: 100%;
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.color};
    background-image: url(${img});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: 50%; 
    font-family: 'Roboto', sans-serif;
`;

const Themebtn = styled.button`
    border: none;
    align-self: flex-start;
    background-color: ${(props) => props.theme.button.backgroundColor};;
    color: #F7D047;
    border-radius: 8px;
    box-sizing: border-box;
    cursor: pointer;
    font-size: 10px;
    margin: 10px;
    padding: 10px 12px;
    width: auto;
    position: absolute;
`;

export {
  Container,
  Themebtn,
};
