import styled from 'styled-components';
import DatePicker from 'react-datepicker';

const SelectContainer = styled.div`
    width: 100%;
    text-align: center;
    font-weight: bolder;
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const SelectCamera = styled.select`
    overflow: hidden;
    background-color: ${(props) => props.theme.form.backgroundColor};
    border: 2px solid ${(props) => props.theme.form.borderColor};
    border-radius: 10px;
    color: ${(props) => props.theme.form.color};
    padding: 10px 15px 10px 15px;
    font-size: large;
    font-weight: 700;
    margin: 20px 0 20px 0;
    text-align: center;
    &:focus {
      outline: none;
    }
`;

const Datebtn = styled.button`
    border: none;
    background-color: ${(props) => props.theme.form.backgroundColor};
    border: 2px solid ${(props) => props.theme.form.borderColor};
    border-radius: 10px;
    color: ${(props) => props.theme.form.color};
    border-radius: 8px;
    cursor: pointer;
    font-size: 20px;
    font-weight: 700;
    padding: 10px 12px;
    margin: 0px 0 20px 0;
`;

const SolInput = styled.input`
    width: 130px;
    border: none;
    background-color: ${(props) => props.theme.form.backgroundColor};
    border: 2px solid ${(props) => props.theme.form.borderColor};
    border-radius: 10px;
    color: ${(props) => props.theme.form.color};
    border-radius: 8px;
    cursor: pointer;
    font-size: 20px;
    font-weight: 700;
    padding: 10px 20px 10px 20px;
    margin: 10px 0 20px 15px;
    &:focus {
      outline: none;
      border: none;
    }
`;

const EarthDate = styled(DatePicker)`
    background-color: ${(props) => props.theme.form.backgroundColor};
    border: 2px solid ${(props) => props.theme.form.borderColor};
    color: ${(props) => props.theme.form.color};
    border-radius: 10px;
    padding: 10px 15px 10px 15px;
    font-weight: 700;
    font-size: large;
    text-align: center;
`;

const NextContainer = styled.div`
width: 100%;
text-align: center;
font-weight: bolder;
padding: 30px;
display: flex;
align-items: center;
justify-content: center;
`;

const NextBtn = styled.button`
border: none;
background-color: ${(props) => props.theme.form.backgroundColor};
border: 2px solid ${(props) => props.theme.form.borderColor};
border-radius: 10px;
color: ${(props) => props.theme.form.color};
border-radius: 8px;
cursor: pointer;
font-size: 20px;
font-weight: 700;
padding: 10px 12px;
margin: 0px 10px 20px 10px;
`;

export {
  SelectContainer,
  SelectCamera,
  Datebtn,
  SolInput,
  EarthDate,
  NextContainer,
  NextBtn,
};
