// MovieDetails.styles.js
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin: 20px;
  border: 1px solid #ccc;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  padding: 10px 0 10px 5px;
`;

export const Poster = styled.img`
  width: 200px;
  height: auto;
  margin-right: 20px;
`;

export const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  flex-grow: 1;
`;

export const Title = styled.h2`
  margin-bottom: 5px;
`;

export const Year = styled.p`
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Genres = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
`;

export const GenreItem = styled.li`
  margin-right: 10px;
`;

export const AdditionalInfo = styled.div`
  padding: 20px;
  margin-top: 20px;
  border: 1px solid #ccc;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
`;

export const ReviewsCastContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;

export const Reviews = styled.div`
  flex-grow: 1;
  margin-right: 10px;
`;

export const Cast = styled.div`
  flex-grow: 1;
`;

export const GoBackLink = styled.div`
  margin-bottom: 10px;
`;

export const LoadingMessage = styled.div`
  text-align: center;
  margin-top: 20px;
`;

export const MovieNotFound = styled.p`
  text-align: center;
  margin-top: 20px;
`;

export const AddInfo = styled.h3`
margin-bottom: 10px;`;

export const MovieDetailsStyles = {
  Container,
  Poster,
  MovieInfo,
  Title,
  Year,
  Genres,
  GenreItem,
  AdditionalInfo,
  ReviewsCastContainer,
  Reviews,
  Cast,
  GoBackLink,
  LoadingMessage,
  MovieNotFound,
};
