import styled from 'styled-components';

const ImgContainer = styled.div`
    width: 90%;
    margin-inline: auto;
    padding-inline: 3rem;
    text-align: center;
    color: ${(props) => props.theme.form.color};
    font-size: large;
    font-weight: 700;
`;

const ImgGrid = styled.div`
    padding: 30px 0 30px 0;
    display: grid;
    gap: 3.5rem;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
`;

const ImgCard = styled.div`
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    display: flex;
    flex-direction: column;
`;

const HomeCard = styled.div`
    border-radius: 10px;
    display: flex;
    flex-direction: column;
`;

const ImgPhoto = styled.img`
    width: 100%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    border-radius: 10px;
    cursor: pointer;
    transition: .5s ease-in-out;
    &:hover{
        transform: scale(1.2);
    }
`;

const HomePhoto = styled.img`
    width: 100%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    border-radius: 10px;
    cursor: pointer;
    transition: .5s ease-in-out;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    &:hover{
        transform: scale(1.2);
    }
`;

const ImgText = styled.div`
    text-decoration: none;
    font-size: x-large;
    font-weight: 900;
    letter-spacing: 0.05em;
    justify-self: center;
    width: 100%;
    margin-bottom: 20px;
    font-family: 'Roboto', sans-serif;
`;

const HomeGrid = styled.div`
    padding: 100px 0 30px 0;
    display: grid;
    gap: 3.5rem;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
`;

export {
  ImgContainer,
  ImgGrid,
  ImgCard,
  ImgPhoto,
  HomeGrid,
  ImgText,
  HomePhoto,
  HomeCard,
};
