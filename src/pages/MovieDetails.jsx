import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../api/fetch-movie-details';

export function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

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

  const fixedDate = movie.release_date.slice(0, 4);
  const fixedScore = Number.parseInt(movie.popularity);
  const fixedUrl = `https://image.tmdb.org/t/p/w185${movie.poster_path}`;

  return (
    <>
      <div>
        <img src={fixedUrl} alt={movie.title} />
        <h2>{movie.title}</h2>
        <p>({fixedDate})</p>
        <p>User score: {fixedScore}%</p>
        <h3>Overview</h3>
        <p>{movie.overview}</p>
        <h3>Genres</h3>
        <ul>
          {movie.genres.map(genre => (
            <li>{genre.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Additional information</h2>
      </div>
    </>
  );
}
