import React, { useState, useEffect, Suspense } from 'react';
import { useParams, useLocation, Outlet, Link } from 'react-router-dom';
import { fetchMovieDetails } from '../api/fetch-movie-details';
import { BackLink } from '../components/BackLink/BackLink';
import {
  Container,
  Poster,
  MovieInfo,
  Title,
  Year,
  Genres,
  GenreItem,
  AdditionalInfo,
  ReviewsCastContainer,
  GoBackLink,
  LoadingMessage,
  MovieNotFound,
  AddInfo,
} from './MovieDetails.styled';
import { MovieList, MovieLi } from './Home.styled';

function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  const location = useLocation();
  const backLinkHref =
    location.state?.from || (location.pathname === '/movies' ? '/movies' : '/');

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const data = await fetchMovieDetails(movieId);
        setMovie(data);
      } catch (error) {
        console.error('Error fetching movie details:', error.message);
      } finally {
        setLoading(false);
      }
    };

    getMovieDetails();
  }, [movieId]);

  if (loading) {
    return <LoadingMessage>Loading...</LoadingMessage>;
  }

  if (!movie) {
    return <MovieNotFound>Movie not found.</MovieNotFound>;
  }

  const { release_date, popularity, poster_path, title, overview, genres } =
    movie;
  const fixedDate = release_date.slice(0, 4);
  const fixedScore = Number.parseInt(popularity / 10);
  const fixedUrl = `https://image.tmdb.org/t/p/w185${poster_path}`;

  return (
    <>
      <GoBackLink>
        <BackLink to={backLinkHref}>Go back</BackLink>
      </GoBackLink>
      <Container>
        {poster_path === null ? (
          <span>No poster</span>
        ) : (
          <Poster src={fixedUrl} alt={title} />
        )}

        <MovieInfo>
          <Title>{title}</Title>
          <Year>({fixedDate})</Year>
          <p>User score: {fixedScore}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <Genres>
            {genres.map(({ id, name }) => (
              <GenreItem key={id}>{name}</GenreItem>
            ))}
          </Genres>
        </MovieInfo>
      </Container>

      <AdditionalInfo>
        <AddInfo>Additional information</AddInfo>
        <MovieList>
          <MovieLi>
            <Link to={`/movies/${movie.id}/cast`} state={{ from: '/movies' }}>
              Cast
            </Link>
          </MovieLi>
          <MovieLi>
            <Link
              to={`/movies/${movie.id}/reviews`}
              state={{ from: '/movies' }}
            >
              Reviews
            </Link>
          </MovieLi>
        </MovieList>
      </AdditionalInfo>

      <ReviewsCastContainer>
        <Suspense fallback={<div>Loading subpage...</div>}>
          <Outlet />
        </Suspense>
      </ReviewsCastContainer>
    </>
  );
}

export default MovieDetails;
