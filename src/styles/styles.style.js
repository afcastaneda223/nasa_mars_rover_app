import styled from 'styled-components';

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    border: 5px solid black;
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.color};
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
    margin: 20px;
    padding: 10px 12px;
    width: auto;
    position: absolute
`;

export {
  Container,
  Themebtn,
};
