import styled from 'styled-components';

export const MainCarouselOfFilmsDashboard = styled.div`
  margin-top: 80px;
`;

export const FilmCardContent = styled.div`
  margin: 30px 0 60px;
  padding: 0 30px;
  display: grid;
  justify-content: center;
  flex-direction: row;
  grid-template-columns: repeat(auto-fit, 250px);
  gap: 17px;
`;

export const ContainerCarouselFilms = styled.div`
  h4 {
    position: relative;
    font-weight: 600;
    top: 20px;
    font-size: 20px;
    margin-left: 80px;
  }
`;
