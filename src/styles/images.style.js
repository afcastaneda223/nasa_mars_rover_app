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

export {
  ImgContainer,
  ImgGrid,
  ImgCard,
  ImgPhoto,
};
