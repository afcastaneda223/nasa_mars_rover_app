import styled from 'styled-components';
import DatePicker from 'react-datepicker';

const SelectContainer = styled.div`
    padding: 30px;
    width: 100%;
    min-height: 40vh;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    justify-content: space-evenly ;

`;

const SelectCamera = styled.select`
    width: auto;
    background-color: ${(props) => props.theme.form.backgroundColor};
    border: 2px solid ${(props) => props.theme.form.borderColor};
    border-radius: 10px;
    color: ${(props) => props.theme.form.color};
    padding: 10px 15px 10px 15px;
    overflow: hidden;
    text-align: center;
    font-size: large;
    font-weight: 700;
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
    font-size: 10px;
    padding: 10px 12px;
    width: auto;
    margin: 10px 0 10px 0;
`;

const SolInput = styled.input`
    width: 50vw;
`;

const MinMax = styled.div`
    width: 100%;    
    display: flex;
    justify-content: space-between;
`;

const EarthDate = styled(DatePicker)`
    width: auto;
    text-align: center;
    background-color: ${(props) => props.theme.form.backgroundColor};
    border: 2px solid ${(props) => props.theme.form.borderColor};
    color: ${(props) => props.theme.form.color};
    border-radius: 10px;
    padding: 10px 15px 10px 15px;
    font-weight: 700;
    font-size: large;
    display: flex;
    align-content: end;
`;

export {
  SelectContainer,
  SelectCamera,
  Datebtn,
  SolInput,
  MinMax,
  EarthDate,
};
