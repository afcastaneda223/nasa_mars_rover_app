import styled from 'styled-components';

const ImgContainer = styled.div`
    width: 100%;
    margin-inline: auto;
    padding-inline: 3rem;
`;

const ImgGrid = styled.div`
    display: grid;
    gap: 3rem;
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
    object-position: 50% 50%;
    border-radius: 10px;
    cursor: pointer;
    transition: .5s ease-in-out;
    &:hover{
        transform: scale(1.3);
    }
`;

export {
  ImgContainer,
  ImgGrid,
  ImgCard,
  ImgPhoto,
};
