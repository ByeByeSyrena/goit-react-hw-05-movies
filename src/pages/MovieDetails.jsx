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

  return (
    <div>
      <h2>{movie.title}</h2>
    </div>
  );
}
