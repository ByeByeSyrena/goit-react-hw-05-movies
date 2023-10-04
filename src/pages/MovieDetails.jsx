import React, { useState, useEffect, Suspense } from 'react';
import { useParams, useLocation, Outlet, Link } from 'react-router-dom';
import { fetchMovieDetails } from '../api/fetch-movie-details';
import { BackLink } from '../components/BackLink/BackLink';

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
    return <p>Loading...</p>;
  }

  if (!movie) {
    return <p>Movie not found.</p>;
  }

  const { release_date, popularity, poster_path, title, overview, genres } =
    movie;
  const fixedDate = release_date.slice(0, 4);
  const fixedScore = Number.parseInt(popularity / 10);
  const fixedUrl = `https://image.tmdb.org/t/p/w185${poster_path}`;

  return (
    <>
      <BackLink to={backLinkHref}>Go back</BackLink>
      <div>
        {poster_path === null ? (
          <span>No poster</span>
        ) : (
          <img src={fixedUrl} alt={title} />
        )}

        <h2>{title}</h2>
        <p>({fixedDate})</p>
        <p>User score: {fixedScore}%</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <ul>
          {genres.map(genre => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Additional information</h2>
        <ul>
          <li>
            <Link to={`/movies/${movie.id}/cast`}>Cast</Link>
          </li>
          <li>
            <Link to={`/movies/${movie.id}/reviews`}>Reviews</Link>
          </li>
        </ul>
        <div>
          <Suspense fallback={<div>Loading subpage...</div>}>
            <Outlet />
          </Suspense>
        </div>
      </div>
    </>
  );
}

export default MovieDetails;
