import styled from 'styled-components';

const Themebtn = styled.button`
    border: none;
    align-self: flex-start;
    background-color: ${(props) => props.theme.backgroundColor};;
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
  Themebtn,
};
